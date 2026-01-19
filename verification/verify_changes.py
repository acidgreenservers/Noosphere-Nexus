
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Assuming dev server runs on 5173 with base path /Noosphere-Nexus/
        page = browser.new_page()
        try:
            page.goto("http://localhost:5173/Noosphere-Nexus/")

            # Wait for content to load
            expect(page.get_by_text("Noosphere AI Frameworks")).to_be_visible()

            # 1. Verify "Explore On GitHub" button
            # Note: The button has a " ▾" suffix, so we look for text containing "Explore On GitHub"
            explore_btn = page.get_by_role("button", name="Explore On GitHub ▾")
            expect(explore_btn).to_be_visible()

            # Click it to reveal dropdown
            explore_btn.click()

            # 2. Verify Dropdown links
            # We check the first one, e.g., "Noosphere Manifold"
            manifold_link = page.get_by_role("link", name="Noosphere Manifold Active Framework")
            expect(manifold_link).to_be_visible()

            # Check href and target
            href = manifold_link.get_attribute("href")
            target = manifold_link.get_attribute("target")

            print(f"Dropdown Link Href: {href}")
            print(f"Dropdown Link Target: {target}")

            if "github.com" not in href:
                print("ERROR: Dropdown link does not point to github")
            if target != "_blank":
                print("ERROR: Dropdown link target is not _blank")

            # Close dropdown
            explore_btn.click() # Toggle back or click outside

            # 3. Verify Active Frameworks section
            # Check the "Active Frameworks" heading
            expect(page.get_by_role("heading", name="Active Frameworks")).to_be_visible()

            # Get the first card in the grid (Noosphere Manifold)
            # The card is a link now.
            # We can find it by heading inside it.

            # Let's target the Noosphere Manifold card link
            # It contains "Noosphere Manifold" text.
            # Using xpath or specific text locator might be easier given the structure.
            # The structure is Link > div > span... h4...

            # The section has id="frameworks"
            section = page.locator("#frameworks")
            # The link card contains the text "Noosphere Manifold" in an h4
            card_link = section.locator("a").filter(has_text="Noosphere Manifold")

            expect(card_link).to_be_visible()

            card_href = card_link.get_attribute("href")
            card_target = card_link.get_attribute("target")

            print(f"Card Link Href: {card_href}")
            print(f"Card Link Target: {card_target}")

            # Verify it is internal (starts with /Noosphere-Nexus/docs/manifold because of router basename)
            if "github.com" in card_href:
                 print("ERROR: Card link points to github")
            if card_target == "_blank":
                 print("ERROR: Card link target is _blank")

            # Scroll to frameworks to take a good screenshot
            section.scroll_into_view_if_needed()
            page.screenshot(path="verification/verification.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
