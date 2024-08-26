import sys
import requests
from bs4 import BeautifulSoup

def check_website(url, keyword):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    if keyword.lower() in soup.get_text().lower():
        return True
    return False

if __name__ == "__main__":
    keyword = sys.argv[1] if len(sys.argv) > 1 else 'test '
    url = 'https://www.google.com/'
    if check_website(url, keyword):
        print(f"Keyword '{keyword}' found on {url}")
    else:
        print(f"Keyword '{keyword}' not found on {url}")


