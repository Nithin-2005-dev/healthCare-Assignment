from flask import Flask, render_template, request, redirect, url_for, flash
import os

app = Flask(__name__)
app.secret_key = "secret_key" 
UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form.get("name")
        age = request.form.get("age")
        file = request.files.get("file")

        if not name or not age or not file:
            flash("All fields are required!")
            return redirect(url_for("index"))

        file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
        file.save(file_path)

        print(f"Name: {name}")
        print(f"Age: {age}")
        print(f"Uploaded File: {file_path}")

        flash("Form submitted successfully!")
        return redirect(url_for("index"))

    return render_template("form.html")

if __name__ == "__main__":
    app.run(debug=True)
