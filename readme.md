# How to update this website

## Pulling

Before you make changes, see if anyone else has made changes. You can do this by running:

```
./pull
```

## Previewing

If you would like to preview your changes, please install python and run:

```
python -m SimpleHTTPServer
```

Now you can preview the page at http://localhost:8000

## Uploading

After you've made changes and have checked that they work, run this command to upload your changes to the website:

```
./push
```

## Adding new files

If you've added new files since the last time you uploaded, please add them with this command:

```
git add the-new-file
```

## Seeing what you've changed

```
git status
git diff
```

## More info

[Git Reference](http://gitref.org/)
