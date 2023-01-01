import win32gui
import win32api
import win32con
from time import sleep


def click(x, y):
    hWnd = win32gui.FindWindow(None, "Realera 8.0 - Piciu")
    # lParam = win32api.MAKELONG(x, y)
    print(hWnd)
    hWnd1= win32gui.FindWindowEx(hWnd, None, None, None)
    # win32gui.SendMessage(hWnd1, win32con.WM_RBUTTONDOWN, win32con.MK_RBUTTON)
    win32api.SendMessage(hWnd1, win32con.WM_KEYDOWN, 0x70, 0)
    sleep(0.5)
    win32api.SendMessage(hWnd1, win32con.WM_KEYUP, 0x70, 0)

click(200,600)

