# vue-outh-microsoft-graph

## Description

This is the repository for the TP 3 and 4 of the course "Interface Development and Design" at Efrei Paris 2024. The goal of this project is to create a web application that allows users to authenticate with their Microsoft account and access their emails.

### Disclaimer

I sometimes started to answer some exercises in the previous commit, anticipating a future problem. Do not pay attention to this, I will always provide the correct implementation in the next commit.
I also did some bonus commits to improve some aspects of the project. You can retrieve them in the bonus section.

### TP 3

- Exercise 1 & 2: creation of the project
- [Exercise 3:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/6a539304dd60dd33e21eb2ee3cbd12bfd06125ad) Ex 3: remove vue CLI placeholders
- [Exercise 4:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/2fb923e19d61d26f069084e071e152ae17d64752) Create HomePage component
- [Exercise 5:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/ae0d3b6c79ada49d147fbf05ec45e322635157d7) Create BaseHeader and BaseFooter components
- [Exercise 6:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/142e34958ed9a99279933c46a72db277d65d31a8) Create BaseLayout that use slot api
- [Exercise 7:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/a0f6a936130479a14888e93d0613b45dcd36addb) Create BaseButton with primary color
- [Exercise 8:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/d100fe7d943b59d483d4e6b47324e6aaada50769) Color palette and prop for BaseButton
- [Exercise 9:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/0b3c260ad9d17654e0b49a28718e3e169f4d58f7) Add AsyncButton
- [Exercise 10:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/d9e501342a203d90b1dee0a1edba6c47e03f0aec) Slowing down the button on click

#### Bonus

- Animated Button with `transition` and `@keyframes`

### TP 4

- [Exercise 1:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/0c60d6d9ae12d36eb16ec4d3827f18dcb7d05a66) Add SigninButton
- [Exercise 2:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/565d219efd72d4c829e93eafdbae06bf9156571c) State management with props/events
- Exercise 3: State management with inject/provide
- [Exercise 4:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/0043c1e537936a82c75629e938aabf8e1acfc48d) State management with store
- [Exercise 5:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/0c54820facb77bbf2d76fc6e22710d22983bae70) Add vue-router dependency
- [Exercise 6:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/0c54820facb77bbf2d76fc6e22710d22983bae70) Add / and /conversations routes
- [Exercise 7:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/06bf6a4a5422eeb61d49a3c7a60efb7188de0006) Add header navigation
- [Exercise 8:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/ed5d91ff4569e6c521e0616d0d4ef720e6dd8c64) Add guard for authenticated routes
- [Exercise 9:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/1ec384955ecd330305caf1b98c6467653519b49e) Add /conversations/:id route
- [Exercise 10:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/0f3172b7b4465f9b1c9d3e950994fb70683f9684) read emails from Microsoft Graph

#### Bonus

- [Exercise 8.1:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/9f442fbb838ab83de0e0ca7cc411a16659688507) Add notification on failed guard
- [Exercise 9.1:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/2a4bc76366f77aa5b938d10995432531a11688e0) Persist store on sessionStorage for refresh
- [Exercise 9.2:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/a22c6974bc5656d34f185bc6863c4f75394cd726) Add logout button
- [Exercise 10.1:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/a600abfc0c07dce616f2e633d7430bd29729730b) Responsive design
- [Exercise 10.2:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/1ea8464b0579b006301f8fd24f75e3d134c65c91) Load emails attachments and display them
- [Exercise 10.3:](https://github.com/PAULMAIRESSE/vue-oauth-microsoft-graph/tree/e64d90f837850280cf1f76f591dcfa469ca16d5f) Support for cid:// attachments and async loading

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).