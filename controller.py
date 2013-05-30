#!/usr/bin/env python
#!-*- coding:utf-8 -*-
import webapp2
from view import TopView, AboutView, ContactView, WorksView, ProfileView, Throw404
from dc.view import DcTopView, DcGenerateView

application = webapp2.WSGIApplication([
    ('/', TopView),
    ('/about/?', AboutView),
    ('/contact/?', ContactView),
    ('/works/?', WorksView),
    ('/profile/?', ProfileView),
    ('/dc/?', DcTopView),
    ('/dc/generate/?', DcGenerateView),
    ('/.*', Throw404)
], debug=True)
