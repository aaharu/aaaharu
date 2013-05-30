#!/usr/bin/env python
#!-*- coding:utf-8 -*-
import os
import jinja2
from webapp2 import RequestHandler

jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), 'template')))

class TopView(RequestHandler):
    def get(self):
        template = jinja_environment.get_template('index.html')
        self.response.write(template.render())

class AboutView(RequestHandler):
    def get(self):
        template = jinja_environment.get_template('about.html')
        self.response.write(template.render())

class ContactView(RequestHandler):
    def get(self):
        template = jinja_environment.get_template('contact.html')
        self.response.write(template.render())

class ProfileView(RequestHandler):
    def get(self):
        template = jinja_environment.get_template('profile.html')
        self.response.write(template.render())

class WorksView(RequestHandler):
    def get(self):
        template = jinja_environment.get_template('works.html')
        self.response.write(template.render())

class Throw404(RequestHandler):
    def get(self):
        self.error(404)
        template = jinja_environment.get_template('404.html')
        self.response.write(template.render())
