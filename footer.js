
import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          /* Netflix Footer Styling */
          .footer {
            background: linear-gradient(135deg, #000000, #141414);
            text-align: center;
            padding: 3rem 1rem 2rem;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            border-top: 3px solid #e50914;
            margin-top: 3rem;
            position: relative;
            overflow: hidden;
          }

          .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #e50914, transparent);
            animation: pulse 2s ease-in-out infinite;
          }

          .footer p {
            margin: 0;
            line-height: 1.6;
            font-weight: 400;
            color: #e5e5e5;
          }

          .footer-link {
            color: #e50914;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            position: relative;
          }

          .footer-link::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: #e50914;
            transition: width 0.3s ease;
          }

          .footer-link:hover {
            color: #ffffff;
            text-shadow: 0 0 8px rgba(229, 9, 20, 0.6);
            transform: translateY(-1px);
          }

          .footer-link:hover::before {
            width: 100%;
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }

          /* Responsive Footer */
          @media (max-width: 768px) {
            .footer {
              padding: 2rem 1rem 1.5rem;
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .footer {
              padding: 1.5rem 1rem;
              font-size: 0.85rem;
            }
          }
        `}
      </style>
      <footer className="footer">
        <p>
          © Designed & Made by Leon Tang (me) 🎬. Last updated July 2025{' '}
          <br />
          <a
            href="https://kyancox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Website Inspiration
          </a>
          {' '} | Netflix Theme by LEONFLIX
        </p>
      </footer>
    </>
  );
};

export default Footer;
