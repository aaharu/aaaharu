#!/usr/bin/env python
#!-*- coding:utf-8 -*-
import os
from base64 import b64encode
import jinja2
from webapp2 import RequestHandler

jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

class DcTopView(RequestHandler):
    def get(self):
        template = jinja_environment.get_template('index.html')
        self.response.out.write(template.render())

class DcGenerateView(RequestHandler):
    def get(self):
        self.redirect('/dc/')

    def post(self):
        form = self.request.get('words')
        if len(form) < 2:
            template = jinja_environment.get_template('index.html')
            self.response.out.write(template.render(alert=u'2文字未満は未対応です・・・'))
        else:
            form = b64encode(form.encode('utf_8'))
            self.redirect('/dcdata/DC.swf?w=' + form)
