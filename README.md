# yamal-coding.github.io

Repository for my personal blog powered by [Jekyll](https://jekyllrb.com/) and [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme. 

This `README.md` has been written for a future me that doesn't remember how this page works... (local testing, deployment, etc).

## How to test locally

### Long answer

Follow official [Github guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

### TL;DR

- Install [Jekyll](https://jekyllrb.com/docs/installation/)

- For initial setup if it is the first time or if dependencies has been updated, run:

```
$ bundle install
```

- For a local deployment on localhost, run:

```
$ bundle exec jekyll serve
```

### Using Docker

If you don't want to install Ruby and Jekyll locally, you can use Docker instead.

- Build the image:

```
$ docker build -t jekyll-site .
```

- Run the container:

```
$ docker run --rm -p 4000:4000 jekyll-site
```

The site will be available at `http://localhost:4000`.

If you want changes to your local files to be reflected in the running container without rebuilding, mount the project directory as a volume:

```
$ docker run --rm -p 4000:4000 -v $(pwd):/site jekyll-site
```

## Deployment

Github will automatically deploy new changes when pushing to `master`.
