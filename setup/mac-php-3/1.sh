goodsaem@goodsaem:~$ sudo apt update
Hit:1 http://kr.archive.ubuntu.com/ubuntu bionic InRelease
Get:2 http://nginx.org/packages/mainline/ubuntu bionic InRelease [2862 B]
Err:2 http://nginx.org/packages/mainline/ubuntu bionic InRelease
  The following signatures couldn't be verified because the public key is not available: NO_PUBKEY ABF5BD827BD9BF62
Hit:3 http://kr.archive.ubuntu.com/ubuntu bionic-updates InRelease
Hit:4 http://kr.archive.ubuntu.com/ubuntu bionic-backports InRelease
Hit:5 http://kr.archive.ubuntu.com/ubuntu bionic-security InRelease
Reading package lists... Done
W: GPG error: http://nginx.org/packages/mainline/ubuntu bionic InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY ABF5BD827BD9BF62
E: The repository 'http://nginx.org/packages/mainline/ubuntu bionic InRelease' is not signed.
N: Updating from such a repository can't be done securely, and is therefore disabled by default.
N: See apt-secure(8) manpage for repository creation and user configuration details.