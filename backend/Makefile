PYTHON ?= /usr/local/bin/python3
APP ?= main:app
HOST ?= 0.0.0.0
PORT ?= 8000

.PHONY: install dev run

install:
	$(PYTHON) -m pip install -r requirements.txt

dev:
	$(PYTHON) -m uvicorn $(APP) --reload --host $(HOST) --port $(PORT)

run:
	$(PYTHON) -m uvicorn $(APP) --host $(HOST) --port $(PORT)
