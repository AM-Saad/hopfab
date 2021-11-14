FROM node
WORKDIR /
COPY . .
RUN yarn install
ENV NODE_ENV development
RUN yarn develop
EXPOSE 8000
CMD ["yarn", "develop"]