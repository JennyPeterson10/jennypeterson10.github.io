# Created by Jenny Peterson March 27, 2019

from tkinter import *
import tkinter as tk


import files_main
import files_func



def load_gui(self):

    #self.lbl_files = tk.Label(self.master,text='Select a source and destination file')
    #self.lbl_files.grid(row=0, column=0,padx=(0,0),pady=(0,0))

    # Define buttons
    self.btn_source = tk.Button(self.master,width=24,height=1,text='Browse source directory...',command=lambda: files_func.findSource(self))
    self.btn_source.grid(row=0,column=0,padx=(20,0),pady=(40,0),sticky=W)
    self.btn_destination = tk.Button(self.master,width=24,height=1,text='Browse destination directory...',command=lambda: files_func.findDestination(self))
    self.btn_destination.grid(row=1,column=0,padx=(20,0),pady=(10,0),sticky=W)
    self.btn_check = tk.Button(self.master,width=12,height=2,text='Check for files...',command=lambda: files_func.checkFiles(self))
    self.btn_check.grid(row=2,column=0,rowspan=2,padx=(20,0),pady=(10,0),sticky=W)
    self.btn_close = tk.Button(self.master,width=12,height=2,text='Close Program',command=lambda: files_func.close(self))
    self.btn_close.grid(row=2,column=2,rowspan=2,padx=(20,0),pady=(10,0),sticky=E)



    # Define browse fields
    self.txt_source = tk.Entry(self.master,text='',width=45)
    self.txt_source.grid(row=0,column=1,rowspan=1,columnspan=2,padx=(20,0),pady=(40,0),sticky=E+W)
    self.txt_destination = tk.Entry(self.master,text='',width=45)
    self.txt_destination.grid(row=1,column=1,rowspan=1,columnspan=2,padx=(20,0),pady=(10,0),sticky=E+W)




if __name__ == "__main__":
    pass
