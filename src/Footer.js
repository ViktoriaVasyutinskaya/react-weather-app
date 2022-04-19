import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <small>
        <a
          href="https://github.com/ViktoriaVasyutinskaya/react-weather-app"
          id="openSource"
          rel="noopener noreferrer"
          target="_blank"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://splendorous-tulumba-70ea6d.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          id="netlify"
        >
          hosted on Netlify
        </a>{" "}
        by V.Vasyutinskaya
      </small>
    </div>
  );
}
