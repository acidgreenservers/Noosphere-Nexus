from playwright.sync_api import sync_playwright

def verify_setup():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app (Case sensitive base URL)
        page.goto("http://localhost:5173/Noosphere-Nexus/")

        # Wait for the app to load
        page.wait_for_selector("#root")

        # Check for MathJax
        mathjax_exists = page.evaluate("typeof window.MathJax !== 'undefined'")
        print(f"MathJax exists: {mathjax_exists}")

        # Check if spa-redirect script is loaded
        # Note: Vite rewrites src paths with base URL, so we search for the file name ending
        spa_redirect_exists = page.evaluate("document.querySelector('script[src$=\"spa-redirect.js\"]') !== null")
        print(f"SPA Redirect script tag exists: {spa_redirect_exists}")

        # Take a screenshot
        page.screenshot(path="verification/verification.png")

        browser.close()

if __name__ == "__main__":
    verify_setup()
