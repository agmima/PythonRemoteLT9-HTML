from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route("/")
def index():
    urls = {
        "style_css": url_for("static", filename="style.css"),
        "scripts_js": url_for("static", filename="scripts.js"),
        "avatar_img": url_for("static", filename="img.png")
    }
    return render_template("cv.html", urls=urls)
