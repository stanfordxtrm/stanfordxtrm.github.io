## Switching between iframe-embedding and direct modes

The website at http://xtrm.stanford.edu is currently using an iframe to embed the contents of http://stanfordxtrm.github.io - that way, you simply need to push changes to this github repo and they will be reflected on the main site.

If you would like to instead have the site be served directly from Stanford's servers (which will add additional steps to the process of making changes and adding collaborators), you will need to do the following:

### Stanford SSH Setup

Edit `~/.ssh/config` and add the line:

```
Host myth.stanford.edu
    User your-sunnet-id
```

### Stanford AFS Setup

Determine whether you are a member of the AFS group `xtrmkpopfusion-admins` doing:

```
ssh myth.stanford.edu
pts membership xtrmkpopfusion-admins
```

If you are not a member of the group, please ask someone who is a member to add you by running the following commands (once they have logged into myth.stanford.edu):

```
pts adduser your-sunnet-id xtrmkpopfusion-admins
```

### Uploading to Stanford's servers

Once you have made your changes and pushed by running `./push`, to upload to Stanford's servers you will need to run

```
./stanford/stanfordupload
```

## Undoing and switching back to iframe-embedding mode

If you would like to switch back to iframe-embedding mode, run the command

```
./stanford/stanfordupload-iframe
```
