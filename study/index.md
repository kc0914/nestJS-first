- main.tsは触らなくていい
  - 3000ポートで起動してるだけ
- app.module.ts
  - アプリのまとまり。ひとまとめにしている箱
  - アプリはモジュール単位で構成されている
  - モジュールは、ControllerとServiceのまとめ
- app.controller.ts
  - リクエストを受け取る場所
  - @GET→getリクエストを受け取る。
  - app.serviceにある処理を呼び出している。
- app.service.ts
  - 実際の処理を書く場所
  - Controllerに呼び出されて処理を実行する

Controller / Service / Module / DI（依存性注入）だけおぼえればいい

Controllerを薄くするために、ビジネスロジックはService側に書く。

機能ごとにモジュールを作って、そこにControllerとServiceをまとめる

モジュール：この機能にはどのControllerとServiceが含まれているかをNestJsに教える

機能ごとにフォルダとモジュールを作り、作ったモジュールを親玉のAppModuleのimportsに追加する


- DI：newをせずにServiceをconstructor経由でControllerに登録する。Controllerにserviceを自動で注入する
- Service側でInjectableをつけると、DIに登録されるServiceになる
- ModuleのProvidersに登録すると使えるようになる
- Controllerや他のServiceのコンストラクタで受け取れるようになる


- nest generate module モジュール名
  でmoduleを作れる
- nest generate service モジュール名 --no-spec
  でserviceを作れる
  - --no-spec → testを生成しない
- nest generate controller モジュール名 --no-spec
  でserviceを作れる- --no-spec → testを生成しない
- nest generate class notes/dto/create-note.dto --no-spec --flat
  - DTO：入力データの入れ物。この形式でデータが来るよ、というtsの型
  - --flatをつけないと、フォルダが作成されてしまう


次に学ぶこと

- Validation
  - class-validator
  - class-transformer


- エラー処理

  - Exception Filter
  - HttpException
  - カスタム例外
  - 例外フィルターによる共通化
- DB操作

  - TypeORM
  - Prisma
  - Mongoose


- 認証、認可
  - JWT認証
  - Passportの利用
  - Guradでのルート保護


- 開発環境を整える
  - ConfigModule：環境変数の管理
  - Logging：ログ編集とフォーマット
  - Middleware：共通処理をリクエスト前に挟む
- 


- 高度な処理
  - Intercepter
  - Pripe
  - Guard


- 技術選択の幅が広がる
  - GraphQL
  - WebSocket
  - MicroServices（gRPC/Kafka/Redisど)
  - 独自CLIやスケジューラの実装（Cron Jobs）


- テスト（単体テスト/E2Eテスト）
  - Jest
