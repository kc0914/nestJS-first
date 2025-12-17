
# NestJS 学習メモ：基本構造と開発フロー

NestJSは、Angularに影響を受けた「モジュールベース」のアーキテクチャを採用したNode.jsフレームワークです。

## 1. 基本的な構成要素（Core Building Blocks）

NestJSを理解する上で、以下の4つの概念をセットで覚えるのが最短ルートです。

| **要素**            | **役割**                         | **備考**                                      |
| ------------------------- | -------------------------------------- | --------------------------------------------------- |
| **Module**          | アプリの機能をひとまとめにする「箱」。 | NestJSにControllerとServiceの存在を教える。         |
| **Controller**      | HTTPリクエストを受け取る「窓口」。     | `@Get()`などのデコレータでルーティングを定義。    |
| **Service**         | 実際の「ビジネスロジック」を書く場所。 | データベース操作や複雑な計算を行う。                |
| **DI (依存性注入)** | クラス間の連携をNestJSに任せる仕組み。 | `new`を使わず、コンストラクタ経由で自動注入する。 |

### 各ファイルの詳細

* **main.ts** : アプリのエントリーポイント。基本は触らなくてOK（ポート番号の指定などを行う）。
* **app.module.ts** : 「親玉」のモジュール。作成した各機能のモジュールをここに `imports` していく。
* **app.controller.ts** : リクエストを処理し、Serviceを呼び出す。**「Controllerは薄く保つ」**のが鉄則。
* **app.service.ts** : 実行部。`@Injectable()` をつけることで、DI可能な部品として登録される。

---

## 2. 依存性注入 (DI: Dependency Injection) の手順

自分で `new Service()` をする必要はありません。以下の手順でNestJSが自動で管理してくれます。

1. **登録** : Serviceクラスに `@Injectable()` デコレータをつける。
2. **提供** : Moduleの `providers` 配列にそのServiceを追加する。
3. **注入** : Controllerなどの `constructor(private readonly service: MyService) {}` で受け取る。

---

## 3. Nest CLI を活用した効率的な開発

コマンドライン（CLI）を使うことで、ボイラープレート（定型文）を自動生成できます。

* モジュールの生成:
  nest generate module モジュール名
* サービスの生成 (テストファイルなし):
  nest generate service モジュール名 --no-spec
* コントローラーの生成 (テストファイルなし):
  nest generate controller モジュール名 --no-spec
* DTO (Data Transfer Object) の生成:
  nest generate class フォルダ名/dto/create-xxx.dto --no-spec --flat
  * **DTOとは** : 入力データの「型」を定義する入れ物。
  * `--flat`: 余計なフォルダを作らずにファイルを生成するオプション。

---

## 4. 今後の学習ロードマップ

基礎を抑えた後は、以下の順序でステップアップしていくとスムーズです。

### ステップ 1：堅牢なアプリにする

* **Validation** : `class-validator`, `class-transformer` を使い、不正な入力を弾く。
* **エラー処理** : `HttpException` や `Exception Filter` でエラーレスポンスを統一する。

### ステップ 2：外部連携とセキュリティ

* **DB操作** : **Prisma** (おすすめ), TypeORM, Mongoose の導入。
* **認証・認可** : JWT, Passport を使用。`Guard` で特定のルートを保護する。
* **環境変数** : `ConfigModule` で `.env` ファイルを管理する。

### ステップ 3：NestJS の高度な機能

* **Interceptor** : レスポンスの変換やログ出力。
* **Pipe** : データの変換（文字列を数値に変えるなど）。
* **Middleware** : リクエストが届く前の共通処理。

### ステップ 4：さらなる技術拡張

* **通信方式** : GraphQL, WebSocket, Microservices (gRPC/Redisなど)。
* **自動化** : Cron Jobs (スケジューラ) の実装。
* **テスト** : Jest による単体テスト・E2Eテスト。
