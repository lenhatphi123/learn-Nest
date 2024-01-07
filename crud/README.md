
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


// create module : nest g module products
// khai báo thư mục module gồm controller, module, service, khi khai báo module xong thì qua app.modele import modulr vừa tạo vào
// controller khai báo các thuộc tính, khai báo vào thư mục module  rồi sử dụng
// controller đóng vai trò nhận request từ client gửi về server rồi reponse data server  về ngược client, được lấy từ service
// Reponse data. Tạo repnsedataa như globalClass chứa data, status và message. được sử dụng tại product controller 
// POST với phương thức DTo  data transfer object là 1 partern được sử dụng để truyền dữ liệu giữa các thành phần khác nhau trong hệ thống. 
// cài đặt 2 package npm install class-transformer pm install class-validator
// Pipes là một cơ chế middleware để xử lý input của một request trước khi nó được xử lý bởi một controller. Pipes giúp cho việc validate data, transform data, filter data, và thực hiện các tác vụ tùy chỉnh khác nếu cần thiết. Pipes cũng có thể được sử dụng để thực hiện xác thực, nơi chúng ta có thể kiểm tra quyền truy cập của người dùng và xử lý các lỗi xác thực khi cần thiết. 
// khai báo pipel tại dto và sử dụng tại body controller 