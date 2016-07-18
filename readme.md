# How to update this website

## First-time Setup

Edit ~/.ssh/config and add the line:

    Host corn.stanford.edu
        User your-sunnet-id

## Pulling

Before you make changes, see if anyone else has made changes. You can do this by running:

    ./pull

## Uploading

After you've made changes and have checked that they work, run this command to upload your changes to the website:

    ./upload

## Adding new files

If you've added new files since the last time you uploaded, please add them with this command:

    git add the-new-file

## Seeing what you've changed

    git status
    git diff

## More info

[Git Reference](http://gitref.org/)
