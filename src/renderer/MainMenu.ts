// This file contains the functions & variables
// used by the main menu.

import { remote, ipcRenderer } from 'electron'
import { PublishRequest } from './../common/PublishObjects'

const dialog = remote.dialog

type FileFoundCallback = (filepath:string, errorMsg: string) => void

// Opens the prompt for the user to look for a file
// The prompt window will be attached to the current window, which should
// be the main window.
// The callback's first arg will be null on error, and the error message
// will be contained in the second arg.
export function lookForFile(callback: FileFoundCallback)
{
    let currentWindow = remote.getCurrentWindow()
    dialog.showOpenDialog(
        currentWindow,
        {
            title:'Select a .csv file',
            filters: [
                {
                    name: 'Comma-separated values',
                    extensions: ['csv']
                }
            ],
            properties: ['openFile']
        },
        (files: string[]) => {
            if(files)
            {
                if(files.length != 1)
                    callback(null, 'Too many files selected!')
                else 
                    callback(files[0],'')
            }
            else 
                callback(null, 'No file selected!')
        }
    )
}

export function publish(filepath: string, subdir: string, repoUrl: string)
{
    ipcRenderer.send('request-publishing', new PublishRequest(filepath,subdir,repoUrl))
}