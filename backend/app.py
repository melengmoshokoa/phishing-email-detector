from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pickle
import traceback

model = joblib.load('model.pkl')
feature_extraction = joblib.load('vectorizer.pkl')

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        email_text = data.get('email')

        if not email_text:
            return jsonify({'error': 'No email text provided'}), 400

        input_data = feature_extraction.transform([email_text])
        prediction = model.predict(input_data)
        probas = model.predict_proba(input_data)[0]
        confidence = round(max(probas) * 100, 2)

        feature_names = feature_extraction.get_feature_names_out()
        coefs = model.coef_[0]
        input_vector = input_data.toarray()[0]

        word_scores = [(feature_names[i], coefs[i] * input_vector[i])
                       for i in range(len(feature_names)) if input_vector[i] != 0]
        top_features = sorted(word_scores, key=lambda x: abs(x[1]), reverse=True)[:5]
        explanation = [word for word, score in top_features]
        chart_data = [{'word': word, 'weight': round(score, 4)} for word, score in top_features]

        result = 'not phishing' if prediction[0] == 1 else 'phishing'

        return jsonify({'result': result,
            'confidence': f"{confidence}%",
            'explanation': explanation,
            'chartData': chart_data})

    except Exception as e:
        return jsonify({'error': str(e), 'trace': traceback.format_exc()}), 500

if __name__ == '__main__':
    app.run(debug=True)


