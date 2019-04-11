import os
from tkinter import *
import tkinter as tk
import sqlite3
import time
import shutil
from tkinter.filedialog import askdirectory
from tkinter import messagebox


import files_main
import files_gui

def center_window(self, w, h): # pass in the tkinter frame (master) reference and the w and h
    # get user's screen width and height
    screen_width = self.master.winfo_screenwidth()
    screen_height = self.master.winfo_screenheight()
    # calculate x and y coordinates to paint the app centered on the user's screen
    x = int((screen_width/2) - (w/2))
    y = int((screen_height/2) - (h/2))
    centerGeo = self.master.geometry('{}x{}+{}+{}'.format(w, h, x, y))
    return centerGeo


# will close if user clicks on the windows upper-right 'X'
def quit(self):
    self.master.destroy()
    os._exit(0)

# ensures the user wants to close program
def close(self):
    if messagebox.askokcancel("Exit program", "Okay to exit application?"):
        self.master.destroy()
        os._exit(0)

def findSource(self):
    source = askdirectory(title="Select Source Directory",initialdir="..\\")
    self.txt_source.delete(0,END) # clears the entry if it is currently populated
    self.txt_source.insert(0,source)

def findDestination(self):
    destination = askdirectory(title="Select Destination Directory",initialdir="..\\")
    self.txt_destination.delete(0,END) # clears the entry if it is currently populated
    self.txt_destination.insert(0,destination)

def checkFiles(self):
    create_db(self)
    src = self.txt_source.get()
    dst = self.txt_destination.get()
    dir = os.listdir(src)
    doctime = time.ctime(os.path.getmtime(src))
    if src == dst:
        messagebox.showerror("Check Directories","Please select a different destination than source.")
        self.txt_destination.delete(0,END)
    else:
        for file in dir:  
            if file.endswith(".txt"):
                txt_dir = os.path.join(src,file)
                txt_file = file
                print(txt_file,doctime)
                shutil.move(txt_dir,dst)
                conn = sqlite3.connect('db_files.db')
                with conn:
                    cur = conn.cursor()
                    cur.execute("""INSERT INTO tbl_files (col_file,col_time) VALUES (?,?)""",(txt_file,doctime))
                    conn.commit()
                conn.close()
        
        self.txt_source.delete(0,END) # clears the entry in the directory text boxes
        self.txt_destination.delete(0,END)



def create_db(self):
    conn = sqlite3.connect('db_files.db')
    with conn:
        cur = conn.cursor()
        cur.execute("CREATE TABLE if not exists tbl_files( \
            ID INTEGER PRIMARY KEY AUTOINCREMENT, col_file TEXT, col_time TEXT);")
        conn.commit()
    conn.close()
   

if __name__ == "__main__":
    pass




