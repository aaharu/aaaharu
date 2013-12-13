#!/usr/bin/env python
#!-*- coding:utf-8 -*-
import webapp2
from view import TopView, WorksView, ProfileView, Throw404
from dc.view import DcTopView, DcGenerateView
from google.appengine.api import urlfetch

class WakeupTask(webapp2.RequestHandler):
    def get(self):
        def handle_result(rpc):
            rpc.get_result()
        def create_callback(rpc):
            return lambda: handle_result(rpc)
        urls = ("http://komenuka.herokuapp.com/robots.txt", "http://agif.herokuapp.com/robots.txt")
        rpcs = []
        for url in urls:
            rpc = urlfetch.create_rpc()
            rpc.callback = create_callback(rpc)
            urlfetch.make_fetch_call(rpc, url)
            rpcs.append(rpc)
        for rpc in rpcs:
            rpc.wait()
        self.response.out.write("OK")

application = webapp2.WSGIApplication([
    ('/', TopView),
    ('/works/?', WorksView),
    ('/profile/?', ProfileView),
    ('/dc/?', DcTopView),
    ('/dc/generate/?', DcGenerateView),
    ('/tasks/wakeup', WakeupTask),
    ('/.*', Throw404)
], debug=True)
