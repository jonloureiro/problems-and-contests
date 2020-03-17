FROM buildpack-deps:buster-curl

RUN set -ex \
  ; apt-get update \
  ; apt-get install --no-install-recommends xz-utils -y \
  ; curl -LS https://nodejs.org/dist/v8.3.0/node-v8.3.0-linux-x64.tar.xz \
  | tar -xJC /opt \
  ; apt-get clean \
  ; rm -rf /var/lib/apt/lists/*

ENV PATH /opt/node-v8.3.0-linux-x64/bin:$PATH

WORKDIR /node

COPY entrypoint.sh .

ENTRYPOINT [ "./entrypoint.sh" ]
