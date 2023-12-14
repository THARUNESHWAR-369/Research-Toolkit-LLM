
from email.policy import default
from typing import Any, List
from urllib.request import Request, urlopen
from time import sleep
from bs4 import BeautifulSoup
import json

from flask import jsonify

from blueprints.dto.documents import Documents

class SCRAPER:
    """
    A class for scraping web pages and extracting content.
    """

    HEADERS = {'User-Agent':'Mozzila/5.0'}
    LXML = 'lxml'
    
    @staticmethod
    def start_scrape(urls : List[str]) -> Any:
        """
        Scrape the given list of URLs and extract page content.

        Args:
            urls (List[str]): A list of URLs to scrape.

        Returns:
            Any: A JSON string containing the scraped data.
        """
        data = []
        try:
            for url in urls:
                sleep(1)
                req = Request(url, headers=SCRAPER.HEADERS)
                html = urlopen(req).read()
                soup = BeautifulSoup(html, SCRAPER.LXML)
                data.append(Documents(page_content=soup.get_text(), source=url).to_dict())
        except Exception as e:
            print(f'Unable to extract content from {urls}')
        return json.dumps(data)
    
    
    
            