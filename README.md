# Problems and Contests
My repository for [URI Online Judge](https://www.urionlinejudge.com.br/).

## Usage
*\* Need the **pwd** command in your shell.*
```bash
# using my container on the dockerhub (jonloureiro/problems-and-contests)
docker run --rm -v $(pwd):/node jonloureiro/problems-and-contests <folder-name>

# example
docker run --rm -v $(pwd):/node jonloureiro/problems-and-contests 1001

# building your container
docker build -t <image-name> .
```

1. Create a folder \<folder-name>
2. Create an index.js inside the folder
3. Create test files with the name ending in .txt
4. Run the docker passing the \<folder-name> how arg

*Look at some folder as an example.*
