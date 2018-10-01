"""
Local server. Runs on port 8000.
"""
import http.server
import socketserver
def runServer():
    PORT = 8000
    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("serving at port", PORT)
        httpd.serve_forever()

if __name__=='__main__':    
    runServer()