from flask import Flask, render_template, request, jsonify
from groq import Groq
import sqlite3

# Initialize Flask app
app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Initialize the Groq API client
client = Groq(api_key="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")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    
    # Send message to the Groq API and get response
    chat_completion = client.chat.completions.create(
        messages=[{"role": "user", "content": user_message}],
        model="llama3-8b-8192",
    )
    
    response = chat_completion.choices[0].message.content

    # Split response into bullet points
    bullet_points = response.split('\n')
    formatted_response = "<ul>" + "".join(f"<li>{point.strip()}</li>" for point in bullet_points if point.strip()) + "</ul>"
    
    return jsonify({"response": formatted_response})

if __name__ == "_main_":
    app.run(debug=True)