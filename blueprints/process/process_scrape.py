
from email.policy import default
from typing import Any, List
from urllib.request import Request, urlopen
from time import sleep
from bs4 import BeautifulSoup
import re

from flask import jsonify

from blueprints.models.documents import Documents

class SCRAPER:
    
    HEADERS = {'User-Agent':'Mozzila/5.0'}
    LXML = 'lxml'
    
    @staticmethod
    def start_scrape(urls : List[str]) -> Any:
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
        return jsonify(data).data.decode('unicode-escape')
    
    
    
            