all:
	@echo "#### functions implemented"
	@echo "make up ...................... initialize app"
	@echo "make pc ...................... runs pre-commit on all files"
	@echo "make test .................... runs all tests (pytest)"

pc:
	@echo "[PRE-COMMIT] All files"
	pre-commit run --all-files

up:
	python3 -m api.index

test:
	@echo "Not implemented"
