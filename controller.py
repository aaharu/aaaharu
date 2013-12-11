#!/usr/bin/env python
#!-*- coding:utf-8 -*-
import webapp2
from view import TopView, WorksView, ProfileView, Throw404
from dc.view import DcTopView, DcGenerateView
from google.appengine.api import urlfetch

class WakeupTask(webapp2.RequestHandler):
    def get(self):
        urlfetch.fetch("http://komenuka.herokuapp.com/robots.txt")
        urlfetch.fetch("http://agif.herokuapp.com/robots.txt")

application = webapp2.WSGIApplication([
    ('/', TopView),
    ('/works/?', WorksView),
    ('/profile/?', ProfileView),
    ('/dc/?', DcTopView),
    ('/dc/generate/?', DcGenerateView),
    ('/tasks/wakeup', WakeupTask),
    ('/.*', Throw404)
], debug=True)
