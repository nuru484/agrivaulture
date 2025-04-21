
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CropRecord
 * 
 */
export type CropRecord = $Result.DefaultSelection<Prisma.$CropRecordPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model Yield
 * 
 */
export type Yield = $Result.DefaultSelection<Prisma.$YieldPayload>
/**
 * Model MarketPrice
 * 
 */
export type MarketPrice = $Result.DefaultSelection<Prisma.$MarketPricePayload>
/**
 * Model FarmingTip
 * 
 */
export type FarmingTip = $Result.DefaultSelection<Prisma.$FarmingTipPayload>
/**
 * Model Weather
 * 
 */
export type Weather = $Result.DefaultSelection<Prisma.$WeatherPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  FARMER: 'FARMER',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cropRecord`: Exposes CRUD operations for the **CropRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CropRecords
    * const cropRecords = await prisma.cropRecord.findMany()
    * ```
    */
  get cropRecord(): Prisma.CropRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.yield`: Exposes CRUD operations for the **Yield** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Yields
    * const yields = await prisma.yield.findMany()
    * ```
    */
  get yield(): Prisma.YieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketPrice`: Exposes CRUD operations for the **MarketPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketPrices
    * const marketPrices = await prisma.marketPrice.findMany()
    * ```
    */
  get marketPrice(): Prisma.MarketPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farmingTip`: Exposes CRUD operations for the **FarmingTip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FarmingTips
    * const farmingTips = await prisma.farmingTip.findMany()
    * ```
    */
  get farmingTip(): Prisma.FarmingTipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weather`: Exposes CRUD operations for the **Weather** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weathers
    * const weathers = await prisma.weather.findMany()
    * ```
    */
  get weather(): Prisma.WeatherDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CropRecord: 'CropRecord',
    Expense: 'Expense',
    Yield: 'Yield',
    MarketPrice: 'MarketPrice',
    FarmingTip: 'FarmingTip',
    Weather: 'Weather'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cropRecord" | "expense" | "yield" | "marketPrice" | "farmingTip" | "weather"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CropRecord: {
        payload: Prisma.$CropRecordPayload<ExtArgs>
        fields: Prisma.CropRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CropRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CropRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload>
          }
          findFirst: {
            args: Prisma.CropRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CropRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload>
          }
          findMany: {
            args: Prisma.CropRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload>[]
          }
          create: {
            args: Prisma.CropRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload>
          }
          createMany: {
            args: Prisma.CropRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CropRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload>[]
          }
          delete: {
            args: Prisma.CropRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload>
          }
          update: {
            args: Prisma.CropRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload>
          }
          deleteMany: {
            args: Prisma.CropRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CropRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CropRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload>[]
          }
          upsert: {
            args: Prisma.CropRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropRecordPayload>
          }
          aggregate: {
            args: Prisma.CropRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCropRecord>
          }
          groupBy: {
            args: Prisma.CropRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<CropRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.CropRecordCountArgs<ExtArgs>
            result: $Utils.Optional<CropRecordCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      Yield: {
        payload: Prisma.$YieldPayload<ExtArgs>
        fields: Prisma.YieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          findFirst: {
            args: Prisma.YieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          findMany: {
            args: Prisma.YieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload>[]
          }
          create: {
            args: Prisma.YieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          createMany: {
            args: Prisma.YieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload>[]
          }
          delete: {
            args: Prisma.YieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          update: {
            args: Prisma.YieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          deleteMany: {
            args: Prisma.YieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload>[]
          }
          upsert: {
            args: Prisma.YieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          aggregate: {
            args: Prisma.YieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYield>
          }
          groupBy: {
            args: Prisma.YieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<YieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.YieldCountArgs<ExtArgs>
            result: $Utils.Optional<YieldCountAggregateOutputType> | number
          }
        }
      }
      MarketPrice: {
        payload: Prisma.$MarketPricePayload<ExtArgs>
        fields: Prisma.MarketPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          findFirst: {
            args: Prisma.MarketPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          findMany: {
            args: Prisma.MarketPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>[]
          }
          create: {
            args: Prisma.MarketPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          createMany: {
            args: Prisma.MarketPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>[]
          }
          delete: {
            args: Prisma.MarketPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          update: {
            args: Prisma.MarketPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          deleteMany: {
            args: Prisma.MarketPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>[]
          }
          upsert: {
            args: Prisma.MarketPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          aggregate: {
            args: Prisma.MarketPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketPrice>
          }
          groupBy: {
            args: Prisma.MarketPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketPriceCountArgs<ExtArgs>
            result: $Utils.Optional<MarketPriceCountAggregateOutputType> | number
          }
        }
      }
      FarmingTip: {
        payload: Prisma.$FarmingTipPayload<ExtArgs>
        fields: Prisma.FarmingTipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmingTipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmingTipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload>
          }
          findFirst: {
            args: Prisma.FarmingTipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmingTipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload>
          }
          findMany: {
            args: Prisma.FarmingTipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload>[]
          }
          create: {
            args: Prisma.FarmingTipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload>
          }
          createMany: {
            args: Prisma.FarmingTipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmingTipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload>[]
          }
          delete: {
            args: Prisma.FarmingTipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload>
          }
          update: {
            args: Prisma.FarmingTipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload>
          }
          deleteMany: {
            args: Prisma.FarmingTipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmingTipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FarmingTipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload>[]
          }
          upsert: {
            args: Prisma.FarmingTipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmingTipPayload>
          }
          aggregate: {
            args: Prisma.FarmingTipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmingTip>
          }
          groupBy: {
            args: Prisma.FarmingTipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmingTipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmingTipCountArgs<ExtArgs>
            result: $Utils.Optional<FarmingTipCountAggregateOutputType> | number
          }
        }
      }
      Weather: {
        payload: Prisma.$WeatherPayload<ExtArgs>
        fields: Prisma.WeatherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          findFirst: {
            args: Prisma.WeatherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          findMany: {
            args: Prisma.WeatherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>[]
          }
          create: {
            args: Prisma.WeatherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          createMany: {
            args: Prisma.WeatherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeatherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>[]
          }
          delete: {
            args: Prisma.WeatherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          update: {
            args: Prisma.WeatherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          deleteMany: {
            args: Prisma.WeatherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeatherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>[]
          }
          upsert: {
            args: Prisma.WeatherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          aggregate: {
            args: Prisma.WeatherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeather>
          }
          groupBy: {
            args: Prisma.WeatherGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeatherGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeatherCountArgs<ExtArgs>
            result: $Utils.Optional<WeatherCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cropRecord?: CropRecordOmit
    expense?: ExpenseOmit
    yield?: YieldOmit
    marketPrice?: MarketPriceOmit
    farmingTip?: FarmingTipOmit
    weather?: WeatherOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    records: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | UserCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropRecordWhereInput
  }


  /**
   * Count Type CropRecordCountOutputType
   */

  export type CropRecordCountOutputType = {
    expenses: number
    yields: number
  }

  export type CropRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | CropRecordCountOutputTypeCountExpensesArgs
    yields?: boolean | CropRecordCountOutputTypeCountYieldsArgs
  }

  // Custom InputTypes
  /**
   * CropRecordCountOutputType without action
   */
  export type CropRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecordCountOutputType
     */
    select?: CropRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CropRecordCountOutputType without action
   */
  export type CropRecordCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * CropRecordCountOutputType without action
   */
  export type CropRecordCountOutputTypeCountYieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YieldWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    region: string | null
    phone: string | null
    profilePicture: string | null
    bio: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    region: string | null
    phone: string | null
    profilePicture: string | null
    bio: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    region: number
    phone: number
    profilePicture: number
    bio: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    region?: true
    phone?: true
    profilePicture?: true
    bio?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    region?: true
    phone?: true
    profilePicture?: true
    bio?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    region?: true
    phone?: true
    profilePicture?: true
    bio?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    region: string
    phone: string
    profilePicture: string | null
    bio: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    region?: boolean
    phone?: boolean
    profilePicture?: boolean
    bio?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    records?: boolean | User$recordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    region?: boolean
    phone?: boolean
    profilePicture?: boolean
    bio?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    region?: boolean
    phone?: boolean
    profilePicture?: boolean
    bio?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    region?: boolean
    phone?: boolean
    profilePicture?: boolean
    bio?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "region" | "phone" | "profilePicture" | "bio" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | User$recordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      records: Prisma.$CropRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      region: string
      phone: string
      profilePicture: string | null
      bio: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    records<T extends User$recordsArgs<ExtArgs> = {}>(args?: Subset<T, User$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly region: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.records
   */
  export type User$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
    where?: CropRecordWhereInput
    orderBy?: CropRecordOrderByWithRelationInput | CropRecordOrderByWithRelationInput[]
    cursor?: CropRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CropRecordScalarFieldEnum | CropRecordScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CropRecord
   */

  export type AggregateCropRecord = {
    _count: CropRecordCountAggregateOutputType | null
    _min: CropRecordMinAggregateOutputType | null
    _max: CropRecordMaxAggregateOutputType | null
  }

  export type CropRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    cropType: string | null
    plantingDate: Date | null
    harvestingDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CropRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    cropType: string | null
    plantingDate: Date | null
    harvestingDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CropRecordCountAggregateOutputType = {
    id: number
    userId: number
    cropType: number
    plantingDate: number
    harvestingDate: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CropRecordMinAggregateInputType = {
    id?: true
    userId?: true
    cropType?: true
    plantingDate?: true
    harvestingDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CropRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    cropType?: true
    plantingDate?: true
    harvestingDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CropRecordCountAggregateInputType = {
    id?: true
    userId?: true
    cropType?: true
    plantingDate?: true
    harvestingDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CropRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CropRecord to aggregate.
     */
    where?: CropRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropRecords to fetch.
     */
    orderBy?: CropRecordOrderByWithRelationInput | CropRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CropRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CropRecords
    **/
    _count?: true | CropRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropRecordMaxAggregateInputType
  }

  export type GetCropRecordAggregateType<T extends CropRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateCropRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCropRecord[P]>
      : GetScalarType<T[P], AggregateCropRecord[P]>
  }




  export type CropRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropRecordWhereInput
    orderBy?: CropRecordOrderByWithAggregationInput | CropRecordOrderByWithAggregationInput[]
    by: CropRecordScalarFieldEnum[] | CropRecordScalarFieldEnum
    having?: CropRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropRecordCountAggregateInputType | true
    _min?: CropRecordMinAggregateInputType
    _max?: CropRecordMaxAggregateInputType
  }

  export type CropRecordGroupByOutputType = {
    id: string
    userId: string
    cropType: string
    plantingDate: Date
    harvestingDate: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CropRecordCountAggregateOutputType | null
    _min: CropRecordMinAggregateOutputType | null
    _max: CropRecordMaxAggregateOutputType | null
  }

  type GetCropRecordGroupByPayload<T extends CropRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropRecordGroupByOutputType[P]>
            : GetScalarType<T[P], CropRecordGroupByOutputType[P]>
        }
      >
    >


  export type CropRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cropType?: boolean
    plantingDate?: boolean
    harvestingDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    expenses?: boolean | CropRecord$expensesArgs<ExtArgs>
    yields?: boolean | CropRecord$yieldsArgs<ExtArgs>
    _count?: boolean | CropRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cropRecord"]>

  export type CropRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cropType?: boolean
    plantingDate?: boolean
    harvestingDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cropRecord"]>

  export type CropRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cropType?: boolean
    plantingDate?: boolean
    harvestingDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cropRecord"]>

  export type CropRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    cropType?: boolean
    plantingDate?: boolean
    harvestingDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CropRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cropType" | "plantingDate" | "harvestingDate" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["cropRecord"]>
  export type CropRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    expenses?: boolean | CropRecord$expensesArgs<ExtArgs>
    yields?: boolean | CropRecord$yieldsArgs<ExtArgs>
    _count?: boolean | CropRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CropRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CropRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CropRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CropRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      yields: Prisma.$YieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      cropType: string
      plantingDate: Date
      harvestingDate: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cropRecord"]>
    composites: {}
  }

  type CropRecordGetPayload<S extends boolean | null | undefined | CropRecordDefaultArgs> = $Result.GetResult<Prisma.$CropRecordPayload, S>

  type CropRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CropRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CropRecordCountAggregateInputType | true
    }

  export interface CropRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CropRecord'], meta: { name: 'CropRecord' } }
    /**
     * Find zero or one CropRecord that matches the filter.
     * @param {CropRecordFindUniqueArgs} args - Arguments to find a CropRecord
     * @example
     * // Get one CropRecord
     * const cropRecord = await prisma.cropRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropRecordFindUniqueArgs>(args: SelectSubset<T, CropRecordFindUniqueArgs<ExtArgs>>): Prisma__CropRecordClient<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CropRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CropRecordFindUniqueOrThrowArgs} args - Arguments to find a CropRecord
     * @example
     * // Get one CropRecord
     * const cropRecord = await prisma.cropRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, CropRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CropRecordClient<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CropRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecordFindFirstArgs} args - Arguments to find a CropRecord
     * @example
     * // Get one CropRecord
     * const cropRecord = await prisma.cropRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropRecordFindFirstArgs>(args?: SelectSubset<T, CropRecordFindFirstArgs<ExtArgs>>): Prisma__CropRecordClient<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CropRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecordFindFirstOrThrowArgs} args - Arguments to find a CropRecord
     * @example
     * // Get one CropRecord
     * const cropRecord = await prisma.cropRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, CropRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__CropRecordClient<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CropRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CropRecords
     * const cropRecords = await prisma.cropRecord.findMany()
     * 
     * // Get first 10 CropRecords
     * const cropRecords = await prisma.cropRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cropRecordWithIdOnly = await prisma.cropRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CropRecordFindManyArgs>(args?: SelectSubset<T, CropRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CropRecord.
     * @param {CropRecordCreateArgs} args - Arguments to create a CropRecord.
     * @example
     * // Create one CropRecord
     * const CropRecord = await prisma.cropRecord.create({
     *   data: {
     *     // ... data to create a CropRecord
     *   }
     * })
     * 
     */
    create<T extends CropRecordCreateArgs>(args: SelectSubset<T, CropRecordCreateArgs<ExtArgs>>): Prisma__CropRecordClient<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CropRecords.
     * @param {CropRecordCreateManyArgs} args - Arguments to create many CropRecords.
     * @example
     * // Create many CropRecords
     * const cropRecord = await prisma.cropRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CropRecordCreateManyArgs>(args?: SelectSubset<T, CropRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CropRecords and returns the data saved in the database.
     * @param {CropRecordCreateManyAndReturnArgs} args - Arguments to create many CropRecords.
     * @example
     * // Create many CropRecords
     * const cropRecord = await prisma.cropRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CropRecords and only return the `id`
     * const cropRecordWithIdOnly = await prisma.cropRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CropRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, CropRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CropRecord.
     * @param {CropRecordDeleteArgs} args - Arguments to delete one CropRecord.
     * @example
     * // Delete one CropRecord
     * const CropRecord = await prisma.cropRecord.delete({
     *   where: {
     *     // ... filter to delete one CropRecord
     *   }
     * })
     * 
     */
    delete<T extends CropRecordDeleteArgs>(args: SelectSubset<T, CropRecordDeleteArgs<ExtArgs>>): Prisma__CropRecordClient<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CropRecord.
     * @param {CropRecordUpdateArgs} args - Arguments to update one CropRecord.
     * @example
     * // Update one CropRecord
     * const cropRecord = await prisma.cropRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CropRecordUpdateArgs>(args: SelectSubset<T, CropRecordUpdateArgs<ExtArgs>>): Prisma__CropRecordClient<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CropRecords.
     * @param {CropRecordDeleteManyArgs} args - Arguments to filter CropRecords to delete.
     * @example
     * // Delete a few CropRecords
     * const { count } = await prisma.cropRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CropRecordDeleteManyArgs>(args?: SelectSubset<T, CropRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CropRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CropRecords
     * const cropRecord = await prisma.cropRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CropRecordUpdateManyArgs>(args: SelectSubset<T, CropRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CropRecords and returns the data updated in the database.
     * @param {CropRecordUpdateManyAndReturnArgs} args - Arguments to update many CropRecords.
     * @example
     * // Update many CropRecords
     * const cropRecord = await prisma.cropRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CropRecords and only return the `id`
     * const cropRecordWithIdOnly = await prisma.cropRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CropRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, CropRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CropRecord.
     * @param {CropRecordUpsertArgs} args - Arguments to update or create a CropRecord.
     * @example
     * // Update or create a CropRecord
     * const cropRecord = await prisma.cropRecord.upsert({
     *   create: {
     *     // ... data to create a CropRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CropRecord we want to update
     *   }
     * })
     */
    upsert<T extends CropRecordUpsertArgs>(args: SelectSubset<T, CropRecordUpsertArgs<ExtArgs>>): Prisma__CropRecordClient<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CropRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecordCountArgs} args - Arguments to filter CropRecords to count.
     * @example
     * // Count the number of CropRecords
     * const count = await prisma.cropRecord.count({
     *   where: {
     *     // ... the filter for the CropRecords we want to count
     *   }
     * })
    **/
    count<T extends CropRecordCountArgs>(
      args?: Subset<T, CropRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CropRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CropRecordAggregateArgs>(args: Subset<T, CropRecordAggregateArgs>): Prisma.PrismaPromise<GetCropRecordAggregateType<T>>

    /**
     * Group by CropRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CropRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CropRecordGroupByArgs['orderBy'] }
        : { orderBy?: CropRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CropRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CropRecord model
   */
  readonly fields: CropRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CropRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CropRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expenses<T extends CropRecord$expensesArgs<ExtArgs> = {}>(args?: Subset<T, CropRecord$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    yields<T extends CropRecord$yieldsArgs<ExtArgs> = {}>(args?: Subset<T, CropRecord$yieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CropRecord model
   */
  interface CropRecordFieldRefs {
    readonly id: FieldRef<"CropRecord", 'String'>
    readonly userId: FieldRef<"CropRecord", 'String'>
    readonly cropType: FieldRef<"CropRecord", 'String'>
    readonly plantingDate: FieldRef<"CropRecord", 'DateTime'>
    readonly harvestingDate: FieldRef<"CropRecord", 'DateTime'>
    readonly notes: FieldRef<"CropRecord", 'String'>
    readonly createdAt: FieldRef<"CropRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"CropRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CropRecord findUnique
   */
  export type CropRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
    /**
     * Filter, which CropRecord to fetch.
     */
    where: CropRecordWhereUniqueInput
  }

  /**
   * CropRecord findUniqueOrThrow
   */
  export type CropRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
    /**
     * Filter, which CropRecord to fetch.
     */
    where: CropRecordWhereUniqueInput
  }

  /**
   * CropRecord findFirst
   */
  export type CropRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
    /**
     * Filter, which CropRecord to fetch.
     */
    where?: CropRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropRecords to fetch.
     */
    orderBy?: CropRecordOrderByWithRelationInput | CropRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CropRecords.
     */
    cursor?: CropRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CropRecords.
     */
    distinct?: CropRecordScalarFieldEnum | CropRecordScalarFieldEnum[]
  }

  /**
   * CropRecord findFirstOrThrow
   */
  export type CropRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
    /**
     * Filter, which CropRecord to fetch.
     */
    where?: CropRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropRecords to fetch.
     */
    orderBy?: CropRecordOrderByWithRelationInput | CropRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CropRecords.
     */
    cursor?: CropRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CropRecords.
     */
    distinct?: CropRecordScalarFieldEnum | CropRecordScalarFieldEnum[]
  }

  /**
   * CropRecord findMany
   */
  export type CropRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
    /**
     * Filter, which CropRecords to fetch.
     */
    where?: CropRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropRecords to fetch.
     */
    orderBy?: CropRecordOrderByWithRelationInput | CropRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CropRecords.
     */
    cursor?: CropRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropRecords.
     */
    skip?: number
    distinct?: CropRecordScalarFieldEnum | CropRecordScalarFieldEnum[]
  }

  /**
   * CropRecord create
   */
  export type CropRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a CropRecord.
     */
    data: XOR<CropRecordCreateInput, CropRecordUncheckedCreateInput>
  }

  /**
   * CropRecord createMany
   */
  export type CropRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CropRecords.
     */
    data: CropRecordCreateManyInput | CropRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CropRecord createManyAndReturn
   */
  export type CropRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * The data used to create many CropRecords.
     */
    data: CropRecordCreateManyInput | CropRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CropRecord update
   */
  export type CropRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a CropRecord.
     */
    data: XOR<CropRecordUpdateInput, CropRecordUncheckedUpdateInput>
    /**
     * Choose, which CropRecord to update.
     */
    where: CropRecordWhereUniqueInput
  }

  /**
   * CropRecord updateMany
   */
  export type CropRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CropRecords.
     */
    data: XOR<CropRecordUpdateManyMutationInput, CropRecordUncheckedUpdateManyInput>
    /**
     * Filter which CropRecords to update
     */
    where?: CropRecordWhereInput
    /**
     * Limit how many CropRecords to update.
     */
    limit?: number
  }

  /**
   * CropRecord updateManyAndReturn
   */
  export type CropRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * The data used to update CropRecords.
     */
    data: XOR<CropRecordUpdateManyMutationInput, CropRecordUncheckedUpdateManyInput>
    /**
     * Filter which CropRecords to update
     */
    where?: CropRecordWhereInput
    /**
     * Limit how many CropRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CropRecord upsert
   */
  export type CropRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the CropRecord to update in case it exists.
     */
    where: CropRecordWhereUniqueInput
    /**
     * In case the CropRecord found by the `where` argument doesn't exist, create a new CropRecord with this data.
     */
    create: XOR<CropRecordCreateInput, CropRecordUncheckedCreateInput>
    /**
     * In case the CropRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CropRecordUpdateInput, CropRecordUncheckedUpdateInput>
  }

  /**
   * CropRecord delete
   */
  export type CropRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
    /**
     * Filter which CropRecord to delete.
     */
    where: CropRecordWhereUniqueInput
  }

  /**
   * CropRecord deleteMany
   */
  export type CropRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CropRecords to delete
     */
    where?: CropRecordWhereInput
    /**
     * Limit how many CropRecords to delete.
     */
    limit?: number
  }

  /**
   * CropRecord.expenses
   */
  export type CropRecord$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * CropRecord.yields
   */
  export type CropRecord$yieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
    where?: YieldWhereInput
    orderBy?: YieldOrderByWithRelationInput | YieldOrderByWithRelationInput[]
    cursor?: YieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YieldScalarFieldEnum | YieldScalarFieldEnum[]
  }

  /**
   * CropRecord without action
   */
  export type CropRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecord
     */
    select?: CropRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CropRecord
     */
    omit?: CropRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropRecordInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    cost: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    cost: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    cropRecordId: string | null
    item: string | null
    cost: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    cropRecordId: string | null
    item: string | null
    cost: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    cropRecordId: number
    item: number
    cost: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    cost?: true
  }

  export type ExpenseSumAggregateInputType = {
    cost?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    cropRecordId?: true
    item?: true
    cost?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    cropRecordId?: true
    item?: true
    cost?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    cropRecordId?: true
    item?: true
    cost?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    cropRecordId: string
    item: string
    cost: number
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cropRecordId?: boolean
    item?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cropRecordId?: boolean
    item?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cropRecordId?: boolean
    item?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    cropRecordId?: boolean
    item?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cropRecordId" | "item" | "cost" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      cropRecord: Prisma.$CropRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cropRecordId: string
      item: string
      cost: number
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cropRecord<T extends CropRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CropRecordDefaultArgs<ExtArgs>>): Prisma__CropRecordClient<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly cropRecordId: FieldRef<"Expense", 'String'>
    readonly item: FieldRef<"Expense", 'String'>
    readonly cost: FieldRef<"Expense", 'Float'>
    readonly date: FieldRef<"Expense", 'DateTime'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
    readonly updatedAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model Yield
   */

  export type AggregateYield = {
    _count: YieldCountAggregateOutputType | null
    _avg: YieldAvgAggregateOutputType | null
    _sum: YieldSumAggregateOutputType | null
    _min: YieldMinAggregateOutputType | null
    _max: YieldMaxAggregateOutputType | null
  }

  export type YieldAvgAggregateOutputType = {
    quantity: number | null
  }

  export type YieldSumAggregateOutputType = {
    quantity: number | null
  }

  export type YieldMinAggregateOutputType = {
    id: string | null
    cropRecordId: string | null
    quantity: number | null
    unit: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YieldMaxAggregateOutputType = {
    id: string | null
    cropRecordId: string | null
    quantity: number | null
    unit: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YieldCountAggregateOutputType = {
    id: number
    cropRecordId: number
    quantity: number
    unit: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type YieldAvgAggregateInputType = {
    quantity?: true
  }

  export type YieldSumAggregateInputType = {
    quantity?: true
  }

  export type YieldMinAggregateInputType = {
    id?: true
    cropRecordId?: true
    quantity?: true
    unit?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YieldMaxAggregateInputType = {
    id?: true
    cropRecordId?: true
    quantity?: true
    unit?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YieldCountAggregateInputType = {
    id?: true
    cropRecordId?: true
    quantity?: true
    unit?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type YieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Yield to aggregate.
     */
    where?: YieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yields to fetch.
     */
    orderBy?: YieldOrderByWithRelationInput | YieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Yields
    **/
    _count?: true | YieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YieldMaxAggregateInputType
  }

  export type GetYieldAggregateType<T extends YieldAggregateArgs> = {
        [P in keyof T & keyof AggregateYield]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYield[P]>
      : GetScalarType<T[P], AggregateYield[P]>
  }




  export type YieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YieldWhereInput
    orderBy?: YieldOrderByWithAggregationInput | YieldOrderByWithAggregationInput[]
    by: YieldScalarFieldEnum[] | YieldScalarFieldEnum
    having?: YieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YieldCountAggregateInputType | true
    _avg?: YieldAvgAggregateInputType
    _sum?: YieldSumAggregateInputType
    _min?: YieldMinAggregateInputType
    _max?: YieldMaxAggregateInputType
  }

  export type YieldGroupByOutputType = {
    id: string
    cropRecordId: string
    quantity: number
    unit: string
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: YieldCountAggregateOutputType | null
    _avg: YieldAvgAggregateOutputType | null
    _sum: YieldSumAggregateOutputType | null
    _min: YieldMinAggregateOutputType | null
    _max: YieldMaxAggregateOutputType | null
  }

  type GetYieldGroupByPayload<T extends YieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YieldGroupByOutputType[P]>
            : GetScalarType<T[P], YieldGroupByOutputType[P]>
        }
      >
    >


  export type YieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cropRecordId?: boolean
    quantity?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["yield"]>

  export type YieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cropRecordId?: boolean
    quantity?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["yield"]>

  export type YieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cropRecordId?: boolean
    quantity?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["yield"]>

  export type YieldSelectScalar = {
    id?: boolean
    cropRecordId?: boolean
    quantity?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type YieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cropRecordId" | "quantity" | "unit" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["yield"]>
  export type YieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }
  export type YieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }
  export type YieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cropRecord?: boolean | CropRecordDefaultArgs<ExtArgs>
  }

  export type $YieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Yield"
    objects: {
      cropRecord: Prisma.$CropRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cropRecordId: string
      quantity: number
      unit: string
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["yield"]>
    composites: {}
  }

  type YieldGetPayload<S extends boolean | null | undefined | YieldDefaultArgs> = $Result.GetResult<Prisma.$YieldPayload, S>

  type YieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YieldCountAggregateInputType | true
    }

  export interface YieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Yield'], meta: { name: 'Yield' } }
    /**
     * Find zero or one Yield that matches the filter.
     * @param {YieldFindUniqueArgs} args - Arguments to find a Yield
     * @example
     * // Get one Yield
     * const yield = await prisma.yield.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YieldFindUniqueArgs>(args: SelectSubset<T, YieldFindUniqueArgs<ExtArgs>>): Prisma__YieldClient<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Yield that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YieldFindUniqueOrThrowArgs} args - Arguments to find a Yield
     * @example
     * // Get one Yield
     * const yield = await prisma.yield.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YieldFindUniqueOrThrowArgs>(args: SelectSubset<T, YieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YieldClient<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yield that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldFindFirstArgs} args - Arguments to find a Yield
     * @example
     * // Get one Yield
     * const yield = await prisma.yield.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YieldFindFirstArgs>(args?: SelectSubset<T, YieldFindFirstArgs<ExtArgs>>): Prisma__YieldClient<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yield that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldFindFirstOrThrowArgs} args - Arguments to find a Yield
     * @example
     * // Get one Yield
     * const yield = await prisma.yield.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YieldFindFirstOrThrowArgs>(args?: SelectSubset<T, YieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__YieldClient<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Yields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Yields
     * const yields = await prisma.yield.findMany()
     * 
     * // Get first 10 Yields
     * const yields = await prisma.yield.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yieldWithIdOnly = await prisma.yield.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YieldFindManyArgs>(args?: SelectSubset<T, YieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Yield.
     * @param {YieldCreateArgs} args - Arguments to create a Yield.
     * @example
     * // Create one Yield
     * const Yield = await prisma.yield.create({
     *   data: {
     *     // ... data to create a Yield
     *   }
     * })
     * 
     */
    create<T extends YieldCreateArgs>(args: SelectSubset<T, YieldCreateArgs<ExtArgs>>): Prisma__YieldClient<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Yields.
     * @param {YieldCreateManyArgs} args - Arguments to create many Yields.
     * @example
     * // Create many Yields
     * const yield = await prisma.yield.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YieldCreateManyArgs>(args?: SelectSubset<T, YieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Yields and returns the data saved in the database.
     * @param {YieldCreateManyAndReturnArgs} args - Arguments to create many Yields.
     * @example
     * // Create many Yields
     * const yield = await prisma.yield.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Yields and only return the `id`
     * const yieldWithIdOnly = await prisma.yield.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YieldCreateManyAndReturnArgs>(args?: SelectSubset<T, YieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Yield.
     * @param {YieldDeleteArgs} args - Arguments to delete one Yield.
     * @example
     * // Delete one Yield
     * const Yield = await prisma.yield.delete({
     *   where: {
     *     // ... filter to delete one Yield
     *   }
     * })
     * 
     */
    delete<T extends YieldDeleteArgs>(args: SelectSubset<T, YieldDeleteArgs<ExtArgs>>): Prisma__YieldClient<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Yield.
     * @param {YieldUpdateArgs} args - Arguments to update one Yield.
     * @example
     * // Update one Yield
     * const yield = await prisma.yield.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YieldUpdateArgs>(args: SelectSubset<T, YieldUpdateArgs<ExtArgs>>): Prisma__YieldClient<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Yields.
     * @param {YieldDeleteManyArgs} args - Arguments to filter Yields to delete.
     * @example
     * // Delete a few Yields
     * const { count } = await prisma.yield.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YieldDeleteManyArgs>(args?: SelectSubset<T, YieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Yields
     * const yield = await prisma.yield.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YieldUpdateManyArgs>(args: SelectSubset<T, YieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yields and returns the data updated in the database.
     * @param {YieldUpdateManyAndReturnArgs} args - Arguments to update many Yields.
     * @example
     * // Update many Yields
     * const yield = await prisma.yield.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Yields and only return the `id`
     * const yieldWithIdOnly = await prisma.yield.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends YieldUpdateManyAndReturnArgs>(args: SelectSubset<T, YieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Yield.
     * @param {YieldUpsertArgs} args - Arguments to update or create a Yield.
     * @example
     * // Update or create a Yield
     * const yield = await prisma.yield.upsert({
     *   create: {
     *     // ... data to create a Yield
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Yield we want to update
     *   }
     * })
     */
    upsert<T extends YieldUpsertArgs>(args: SelectSubset<T, YieldUpsertArgs<ExtArgs>>): Prisma__YieldClient<$Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Yields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldCountArgs} args - Arguments to filter Yields to count.
     * @example
     * // Count the number of Yields
     * const count = await prisma.yield.count({
     *   where: {
     *     // ... the filter for the Yields we want to count
     *   }
     * })
    **/
    count<T extends YieldCountArgs>(
      args?: Subset<T, YieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Yield.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YieldAggregateArgs>(args: Subset<T, YieldAggregateArgs>): Prisma.PrismaPromise<GetYieldAggregateType<T>>

    /**
     * Group by Yield.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends YieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YieldGroupByArgs['orderBy'] }
        : { orderBy?: YieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, YieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Yield model
   */
  readonly fields: YieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Yield.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cropRecord<T extends CropRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CropRecordDefaultArgs<ExtArgs>>): Prisma__CropRecordClient<$Result.GetResult<Prisma.$CropRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Yield model
   */
  interface YieldFieldRefs {
    readonly id: FieldRef<"Yield", 'String'>
    readonly cropRecordId: FieldRef<"Yield", 'String'>
    readonly quantity: FieldRef<"Yield", 'Float'>
    readonly unit: FieldRef<"Yield", 'String'>
    readonly date: FieldRef<"Yield", 'DateTime'>
    readonly createdAt: FieldRef<"Yield", 'DateTime'>
    readonly updatedAt: FieldRef<"Yield", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Yield findUnique
   */
  export type YieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
    /**
     * Filter, which Yield to fetch.
     */
    where: YieldWhereUniqueInput
  }

  /**
   * Yield findUniqueOrThrow
   */
  export type YieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
    /**
     * Filter, which Yield to fetch.
     */
    where: YieldWhereUniqueInput
  }

  /**
   * Yield findFirst
   */
  export type YieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
    /**
     * Filter, which Yield to fetch.
     */
    where?: YieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yields to fetch.
     */
    orderBy?: YieldOrderByWithRelationInput | YieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Yields.
     */
    cursor?: YieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Yields.
     */
    distinct?: YieldScalarFieldEnum | YieldScalarFieldEnum[]
  }

  /**
   * Yield findFirstOrThrow
   */
  export type YieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
    /**
     * Filter, which Yield to fetch.
     */
    where?: YieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yields to fetch.
     */
    orderBy?: YieldOrderByWithRelationInput | YieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Yields.
     */
    cursor?: YieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Yields.
     */
    distinct?: YieldScalarFieldEnum | YieldScalarFieldEnum[]
  }

  /**
   * Yield findMany
   */
  export type YieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
    /**
     * Filter, which Yields to fetch.
     */
    where?: YieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yields to fetch.
     */
    orderBy?: YieldOrderByWithRelationInput | YieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Yields.
     */
    cursor?: YieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yields.
     */
    skip?: number
    distinct?: YieldScalarFieldEnum | YieldScalarFieldEnum[]
  }

  /**
   * Yield create
   */
  export type YieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
    /**
     * The data needed to create a Yield.
     */
    data: XOR<YieldCreateInput, YieldUncheckedCreateInput>
  }

  /**
   * Yield createMany
   */
  export type YieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Yields.
     */
    data: YieldCreateManyInput | YieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Yield createManyAndReturn
   */
  export type YieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * The data used to create many Yields.
     */
    data: YieldCreateManyInput | YieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Yield update
   */
  export type YieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
    /**
     * The data needed to update a Yield.
     */
    data: XOR<YieldUpdateInput, YieldUncheckedUpdateInput>
    /**
     * Choose, which Yield to update.
     */
    where: YieldWhereUniqueInput
  }

  /**
   * Yield updateMany
   */
  export type YieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Yields.
     */
    data: XOR<YieldUpdateManyMutationInput, YieldUncheckedUpdateManyInput>
    /**
     * Filter which Yields to update
     */
    where?: YieldWhereInput
    /**
     * Limit how many Yields to update.
     */
    limit?: number
  }

  /**
   * Yield updateManyAndReturn
   */
  export type YieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * The data used to update Yields.
     */
    data: XOR<YieldUpdateManyMutationInput, YieldUncheckedUpdateManyInput>
    /**
     * Filter which Yields to update
     */
    where?: YieldWhereInput
    /**
     * Limit how many Yields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Yield upsert
   */
  export type YieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
    /**
     * The filter to search for the Yield to update in case it exists.
     */
    where: YieldWhereUniqueInput
    /**
     * In case the Yield found by the `where` argument doesn't exist, create a new Yield with this data.
     */
    create: XOR<YieldCreateInput, YieldUncheckedCreateInput>
    /**
     * In case the Yield was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YieldUpdateInput, YieldUncheckedUpdateInput>
  }

  /**
   * Yield delete
   */
  export type YieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
    /**
     * Filter which Yield to delete.
     */
    where: YieldWhereUniqueInput
  }

  /**
   * Yield deleteMany
   */
  export type YieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Yields to delete
     */
    where?: YieldWhereInput
    /**
     * Limit how many Yields to delete.
     */
    limit?: number
  }

  /**
   * Yield without action
   */
  export type YieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YieldInclude<ExtArgs> | null
  }


  /**
   * Model MarketPrice
   */

  export type AggregateMarketPrice = {
    _count: MarketPriceCountAggregateOutputType | null
    _avg: MarketPriceAvgAggregateOutputType | null
    _sum: MarketPriceSumAggregateOutputType | null
    _min: MarketPriceMinAggregateOutputType | null
    _max: MarketPriceMaxAggregateOutputType | null
  }

  export type MarketPriceAvgAggregateOutputType = {
    price: number | null
  }

  export type MarketPriceSumAggregateOutputType = {
    price: number | null
  }

  export type MarketPriceMinAggregateOutputType = {
    id: string | null
    crop: string | null
    region: string | null
    price: number | null
    unit: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketPriceMaxAggregateOutputType = {
    id: string | null
    crop: string | null
    region: string | null
    price: number | null
    unit: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketPriceCountAggregateOutputType = {
    id: number
    crop: number
    region: number
    price: number
    unit: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarketPriceAvgAggregateInputType = {
    price?: true
  }

  export type MarketPriceSumAggregateInputType = {
    price?: true
  }

  export type MarketPriceMinAggregateInputType = {
    id?: true
    crop?: true
    region?: true
    price?: true
    unit?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketPriceMaxAggregateInputType = {
    id?: true
    crop?: true
    region?: true
    price?: true
    unit?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketPriceCountAggregateInputType = {
    id?: true
    crop?: true
    region?: true
    price?: true
    unit?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarketPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketPrice to aggregate.
     */
    where?: MarketPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketPrices to fetch.
     */
    orderBy?: MarketPriceOrderByWithRelationInput | MarketPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketPrices
    **/
    _count?: true | MarketPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketPriceMaxAggregateInputType
  }

  export type GetMarketPriceAggregateType<T extends MarketPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketPrice[P]>
      : GetScalarType<T[P], AggregateMarketPrice[P]>
  }




  export type MarketPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketPriceWhereInput
    orderBy?: MarketPriceOrderByWithAggregationInput | MarketPriceOrderByWithAggregationInput[]
    by: MarketPriceScalarFieldEnum[] | MarketPriceScalarFieldEnum
    having?: MarketPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketPriceCountAggregateInputType | true
    _avg?: MarketPriceAvgAggregateInputType
    _sum?: MarketPriceSumAggregateInputType
    _min?: MarketPriceMinAggregateInputType
    _max?: MarketPriceMaxAggregateInputType
  }

  export type MarketPriceGroupByOutputType = {
    id: string
    crop: string
    region: string
    price: number
    unit: string
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: MarketPriceCountAggregateOutputType | null
    _avg: MarketPriceAvgAggregateOutputType | null
    _sum: MarketPriceSumAggregateOutputType | null
    _min: MarketPriceMinAggregateOutputType | null
    _max: MarketPriceMaxAggregateOutputType | null
  }

  type GetMarketPriceGroupByPayload<T extends MarketPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketPriceGroupByOutputType[P]>
            : GetScalarType<T[P], MarketPriceGroupByOutputType[P]>
        }
      >
    >


  export type MarketPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crop?: boolean
    region?: boolean
    price?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marketPrice"]>

  export type MarketPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crop?: boolean
    region?: boolean
    price?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marketPrice"]>

  export type MarketPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crop?: boolean
    region?: boolean
    price?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marketPrice"]>

  export type MarketPriceSelectScalar = {
    id?: boolean
    crop?: boolean
    region?: boolean
    price?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarketPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "crop" | "region" | "price" | "unit" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["marketPrice"]>

  export type $MarketPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketPrice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      crop: string
      region: string
      price: number
      unit: string
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["marketPrice"]>
    composites: {}
  }

  type MarketPriceGetPayload<S extends boolean | null | undefined | MarketPriceDefaultArgs> = $Result.GetResult<Prisma.$MarketPricePayload, S>

  type MarketPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketPriceCountAggregateInputType | true
    }

  export interface MarketPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketPrice'], meta: { name: 'MarketPrice' } }
    /**
     * Find zero or one MarketPrice that matches the filter.
     * @param {MarketPriceFindUniqueArgs} args - Arguments to find a MarketPrice
     * @example
     * // Get one MarketPrice
     * const marketPrice = await prisma.marketPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketPriceFindUniqueArgs>(args: SelectSubset<T, MarketPriceFindUniqueArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketPriceFindUniqueOrThrowArgs} args - Arguments to find a MarketPrice
     * @example
     * // Get one MarketPrice
     * const marketPrice = await prisma.marketPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceFindFirstArgs} args - Arguments to find a MarketPrice
     * @example
     * // Get one MarketPrice
     * const marketPrice = await prisma.marketPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketPriceFindFirstArgs>(args?: SelectSubset<T, MarketPriceFindFirstArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceFindFirstOrThrowArgs} args - Arguments to find a MarketPrice
     * @example
     * // Get one MarketPrice
     * const marketPrice = await prisma.marketPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketPrices
     * const marketPrices = await prisma.marketPrice.findMany()
     * 
     * // Get first 10 MarketPrices
     * const marketPrices = await prisma.marketPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketPriceWithIdOnly = await prisma.marketPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketPriceFindManyArgs>(args?: SelectSubset<T, MarketPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketPrice.
     * @param {MarketPriceCreateArgs} args - Arguments to create a MarketPrice.
     * @example
     * // Create one MarketPrice
     * const MarketPrice = await prisma.marketPrice.create({
     *   data: {
     *     // ... data to create a MarketPrice
     *   }
     * })
     * 
     */
    create<T extends MarketPriceCreateArgs>(args: SelectSubset<T, MarketPriceCreateArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketPrices.
     * @param {MarketPriceCreateManyArgs} args - Arguments to create many MarketPrices.
     * @example
     * // Create many MarketPrices
     * const marketPrice = await prisma.marketPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketPriceCreateManyArgs>(args?: SelectSubset<T, MarketPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketPrices and returns the data saved in the database.
     * @param {MarketPriceCreateManyAndReturnArgs} args - Arguments to create many MarketPrices.
     * @example
     * // Create many MarketPrices
     * const marketPrice = await prisma.marketPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketPrices and only return the `id`
     * const marketPriceWithIdOnly = await prisma.marketPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketPrice.
     * @param {MarketPriceDeleteArgs} args - Arguments to delete one MarketPrice.
     * @example
     * // Delete one MarketPrice
     * const MarketPrice = await prisma.marketPrice.delete({
     *   where: {
     *     // ... filter to delete one MarketPrice
     *   }
     * })
     * 
     */
    delete<T extends MarketPriceDeleteArgs>(args: SelectSubset<T, MarketPriceDeleteArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketPrice.
     * @param {MarketPriceUpdateArgs} args - Arguments to update one MarketPrice.
     * @example
     * // Update one MarketPrice
     * const marketPrice = await prisma.marketPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketPriceUpdateArgs>(args: SelectSubset<T, MarketPriceUpdateArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketPrices.
     * @param {MarketPriceDeleteManyArgs} args - Arguments to filter MarketPrices to delete.
     * @example
     * // Delete a few MarketPrices
     * const { count } = await prisma.marketPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketPriceDeleteManyArgs>(args?: SelectSubset<T, MarketPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketPrices
     * const marketPrice = await prisma.marketPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketPriceUpdateManyArgs>(args: SelectSubset<T, MarketPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketPrices and returns the data updated in the database.
     * @param {MarketPriceUpdateManyAndReturnArgs} args - Arguments to update many MarketPrices.
     * @example
     * // Update many MarketPrices
     * const marketPrice = await prisma.marketPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketPrices and only return the `id`
     * const marketPriceWithIdOnly = await prisma.marketPrice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketPrice.
     * @param {MarketPriceUpsertArgs} args - Arguments to update or create a MarketPrice.
     * @example
     * // Update or create a MarketPrice
     * const marketPrice = await prisma.marketPrice.upsert({
     *   create: {
     *     // ... data to create a MarketPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketPrice we want to update
     *   }
     * })
     */
    upsert<T extends MarketPriceUpsertArgs>(args: SelectSubset<T, MarketPriceUpsertArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceCountArgs} args - Arguments to filter MarketPrices to count.
     * @example
     * // Count the number of MarketPrices
     * const count = await prisma.marketPrice.count({
     *   where: {
     *     // ... the filter for the MarketPrices we want to count
     *   }
     * })
    **/
    count<T extends MarketPriceCountArgs>(
      args?: Subset<T, MarketPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketPriceAggregateArgs>(args: Subset<T, MarketPriceAggregateArgs>): Prisma.PrismaPromise<GetMarketPriceAggregateType<T>>

    /**
     * Group by MarketPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketPriceGroupByArgs['orderBy'] }
        : { orderBy?: MarketPriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketPrice model
   */
  readonly fields: MarketPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketPrice model
   */
  interface MarketPriceFieldRefs {
    readonly id: FieldRef<"MarketPrice", 'String'>
    readonly crop: FieldRef<"MarketPrice", 'String'>
    readonly region: FieldRef<"MarketPrice", 'String'>
    readonly price: FieldRef<"MarketPrice", 'Float'>
    readonly unit: FieldRef<"MarketPrice", 'String'>
    readonly date: FieldRef<"MarketPrice", 'DateTime'>
    readonly createdAt: FieldRef<"MarketPrice", 'DateTime'>
    readonly updatedAt: FieldRef<"MarketPrice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketPrice findUnique
   */
  export type MarketPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter, which MarketPrice to fetch.
     */
    where: MarketPriceWhereUniqueInput
  }

  /**
   * MarketPrice findUniqueOrThrow
   */
  export type MarketPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter, which MarketPrice to fetch.
     */
    where: MarketPriceWhereUniqueInput
  }

  /**
   * MarketPrice findFirst
   */
  export type MarketPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter, which MarketPrice to fetch.
     */
    where?: MarketPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketPrices to fetch.
     */
    orderBy?: MarketPriceOrderByWithRelationInput | MarketPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketPrices.
     */
    cursor?: MarketPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketPrices.
     */
    distinct?: MarketPriceScalarFieldEnum | MarketPriceScalarFieldEnum[]
  }

  /**
   * MarketPrice findFirstOrThrow
   */
  export type MarketPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter, which MarketPrice to fetch.
     */
    where?: MarketPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketPrices to fetch.
     */
    orderBy?: MarketPriceOrderByWithRelationInput | MarketPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketPrices.
     */
    cursor?: MarketPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketPrices.
     */
    distinct?: MarketPriceScalarFieldEnum | MarketPriceScalarFieldEnum[]
  }

  /**
   * MarketPrice findMany
   */
  export type MarketPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter, which MarketPrices to fetch.
     */
    where?: MarketPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketPrices to fetch.
     */
    orderBy?: MarketPriceOrderByWithRelationInput | MarketPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketPrices.
     */
    cursor?: MarketPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketPrices.
     */
    skip?: number
    distinct?: MarketPriceScalarFieldEnum | MarketPriceScalarFieldEnum[]
  }

  /**
   * MarketPrice create
   */
  export type MarketPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * The data needed to create a MarketPrice.
     */
    data: XOR<MarketPriceCreateInput, MarketPriceUncheckedCreateInput>
  }

  /**
   * MarketPrice createMany
   */
  export type MarketPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketPrices.
     */
    data: MarketPriceCreateManyInput | MarketPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketPrice createManyAndReturn
   */
  export type MarketPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * The data used to create many MarketPrices.
     */
    data: MarketPriceCreateManyInput | MarketPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketPrice update
   */
  export type MarketPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * The data needed to update a MarketPrice.
     */
    data: XOR<MarketPriceUpdateInput, MarketPriceUncheckedUpdateInput>
    /**
     * Choose, which MarketPrice to update.
     */
    where: MarketPriceWhereUniqueInput
  }

  /**
   * MarketPrice updateMany
   */
  export type MarketPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketPrices.
     */
    data: XOR<MarketPriceUpdateManyMutationInput, MarketPriceUncheckedUpdateManyInput>
    /**
     * Filter which MarketPrices to update
     */
    where?: MarketPriceWhereInput
    /**
     * Limit how many MarketPrices to update.
     */
    limit?: number
  }

  /**
   * MarketPrice updateManyAndReturn
   */
  export type MarketPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * The data used to update MarketPrices.
     */
    data: XOR<MarketPriceUpdateManyMutationInput, MarketPriceUncheckedUpdateManyInput>
    /**
     * Filter which MarketPrices to update
     */
    where?: MarketPriceWhereInput
    /**
     * Limit how many MarketPrices to update.
     */
    limit?: number
  }

  /**
   * MarketPrice upsert
   */
  export type MarketPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * The filter to search for the MarketPrice to update in case it exists.
     */
    where: MarketPriceWhereUniqueInput
    /**
     * In case the MarketPrice found by the `where` argument doesn't exist, create a new MarketPrice with this data.
     */
    create: XOR<MarketPriceCreateInput, MarketPriceUncheckedCreateInput>
    /**
     * In case the MarketPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketPriceUpdateInput, MarketPriceUncheckedUpdateInput>
  }

  /**
   * MarketPrice delete
   */
  export type MarketPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter which MarketPrice to delete.
     */
    where: MarketPriceWhereUniqueInput
  }

  /**
   * MarketPrice deleteMany
   */
  export type MarketPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketPrices to delete
     */
    where?: MarketPriceWhereInput
    /**
     * Limit how many MarketPrices to delete.
     */
    limit?: number
  }

  /**
   * MarketPrice without action
   */
  export type MarketPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
  }


  /**
   * Model FarmingTip
   */

  export type AggregateFarmingTip = {
    _count: FarmingTipCountAggregateOutputType | null
    _min: FarmingTipMinAggregateOutputType | null
    _max: FarmingTipMaxAggregateOutputType | null
  }

  export type FarmingTipMinAggregateOutputType = {
    id: string | null
    tip: string | null
    crop: string | null
    region: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmingTipMaxAggregateOutputType = {
    id: string | null
    tip: string | null
    crop: string | null
    region: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmingTipCountAggregateOutputType = {
    id: number
    tip: number
    crop: number
    region: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FarmingTipMinAggregateInputType = {
    id?: true
    tip?: true
    crop?: true
    region?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmingTipMaxAggregateInputType = {
    id?: true
    tip?: true
    crop?: true
    region?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmingTipCountAggregateInputType = {
    id?: true
    tip?: true
    crop?: true
    region?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FarmingTipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmingTip to aggregate.
     */
    where?: FarmingTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmingTips to fetch.
     */
    orderBy?: FarmingTipOrderByWithRelationInput | FarmingTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmingTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmingTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmingTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FarmingTips
    **/
    _count?: true | FarmingTipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmingTipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmingTipMaxAggregateInputType
  }

  export type GetFarmingTipAggregateType<T extends FarmingTipAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmingTip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmingTip[P]>
      : GetScalarType<T[P], AggregateFarmingTip[P]>
  }




  export type FarmingTipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmingTipWhereInput
    orderBy?: FarmingTipOrderByWithAggregationInput | FarmingTipOrderByWithAggregationInput[]
    by: FarmingTipScalarFieldEnum[] | FarmingTipScalarFieldEnum
    having?: FarmingTipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmingTipCountAggregateInputType | true
    _min?: FarmingTipMinAggregateInputType
    _max?: FarmingTipMaxAggregateInputType
  }

  export type FarmingTipGroupByOutputType = {
    id: string
    tip: string
    crop: string | null
    region: string | null
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: FarmingTipCountAggregateOutputType | null
    _min: FarmingTipMinAggregateOutputType | null
    _max: FarmingTipMaxAggregateOutputType | null
  }

  type GetFarmingTipGroupByPayload<T extends FarmingTipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmingTipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmingTipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmingTipGroupByOutputType[P]>
            : GetScalarType<T[P], FarmingTipGroupByOutputType[P]>
        }
      >
    >


  export type FarmingTipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tip?: boolean
    crop?: boolean
    region?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["farmingTip"]>

  export type FarmingTipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tip?: boolean
    crop?: boolean
    region?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["farmingTip"]>

  export type FarmingTipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tip?: boolean
    crop?: boolean
    region?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["farmingTip"]>

  export type FarmingTipSelectScalar = {
    id?: boolean
    tip?: boolean
    crop?: boolean
    region?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FarmingTipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tip" | "crop" | "region" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["farmingTip"]>

  export type $FarmingTipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FarmingTip"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tip: string
      crop: string | null
      region: string | null
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["farmingTip"]>
    composites: {}
  }

  type FarmingTipGetPayload<S extends boolean | null | undefined | FarmingTipDefaultArgs> = $Result.GetResult<Prisma.$FarmingTipPayload, S>

  type FarmingTipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmingTipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmingTipCountAggregateInputType | true
    }

  export interface FarmingTipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FarmingTip'], meta: { name: 'FarmingTip' } }
    /**
     * Find zero or one FarmingTip that matches the filter.
     * @param {FarmingTipFindUniqueArgs} args - Arguments to find a FarmingTip
     * @example
     * // Get one FarmingTip
     * const farmingTip = await prisma.farmingTip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmingTipFindUniqueArgs>(args: SelectSubset<T, FarmingTipFindUniqueArgs<ExtArgs>>): Prisma__FarmingTipClient<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FarmingTip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmingTipFindUniqueOrThrowArgs} args - Arguments to find a FarmingTip
     * @example
     * // Get one FarmingTip
     * const farmingTip = await prisma.farmingTip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmingTipFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmingTipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmingTipClient<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FarmingTip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingTipFindFirstArgs} args - Arguments to find a FarmingTip
     * @example
     * // Get one FarmingTip
     * const farmingTip = await prisma.farmingTip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmingTipFindFirstArgs>(args?: SelectSubset<T, FarmingTipFindFirstArgs<ExtArgs>>): Prisma__FarmingTipClient<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FarmingTip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingTipFindFirstOrThrowArgs} args - Arguments to find a FarmingTip
     * @example
     * // Get one FarmingTip
     * const farmingTip = await prisma.farmingTip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmingTipFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmingTipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmingTipClient<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FarmingTips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingTipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FarmingTips
     * const farmingTips = await prisma.farmingTip.findMany()
     * 
     * // Get first 10 FarmingTips
     * const farmingTips = await prisma.farmingTip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmingTipWithIdOnly = await prisma.farmingTip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmingTipFindManyArgs>(args?: SelectSubset<T, FarmingTipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FarmingTip.
     * @param {FarmingTipCreateArgs} args - Arguments to create a FarmingTip.
     * @example
     * // Create one FarmingTip
     * const FarmingTip = await prisma.farmingTip.create({
     *   data: {
     *     // ... data to create a FarmingTip
     *   }
     * })
     * 
     */
    create<T extends FarmingTipCreateArgs>(args: SelectSubset<T, FarmingTipCreateArgs<ExtArgs>>): Prisma__FarmingTipClient<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FarmingTips.
     * @param {FarmingTipCreateManyArgs} args - Arguments to create many FarmingTips.
     * @example
     * // Create many FarmingTips
     * const farmingTip = await prisma.farmingTip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmingTipCreateManyArgs>(args?: SelectSubset<T, FarmingTipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FarmingTips and returns the data saved in the database.
     * @param {FarmingTipCreateManyAndReturnArgs} args - Arguments to create many FarmingTips.
     * @example
     * // Create many FarmingTips
     * const farmingTip = await prisma.farmingTip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FarmingTips and only return the `id`
     * const farmingTipWithIdOnly = await prisma.farmingTip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmingTipCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmingTipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FarmingTip.
     * @param {FarmingTipDeleteArgs} args - Arguments to delete one FarmingTip.
     * @example
     * // Delete one FarmingTip
     * const FarmingTip = await prisma.farmingTip.delete({
     *   where: {
     *     // ... filter to delete one FarmingTip
     *   }
     * })
     * 
     */
    delete<T extends FarmingTipDeleteArgs>(args: SelectSubset<T, FarmingTipDeleteArgs<ExtArgs>>): Prisma__FarmingTipClient<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FarmingTip.
     * @param {FarmingTipUpdateArgs} args - Arguments to update one FarmingTip.
     * @example
     * // Update one FarmingTip
     * const farmingTip = await prisma.farmingTip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmingTipUpdateArgs>(args: SelectSubset<T, FarmingTipUpdateArgs<ExtArgs>>): Prisma__FarmingTipClient<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FarmingTips.
     * @param {FarmingTipDeleteManyArgs} args - Arguments to filter FarmingTips to delete.
     * @example
     * // Delete a few FarmingTips
     * const { count } = await prisma.farmingTip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmingTipDeleteManyArgs>(args?: SelectSubset<T, FarmingTipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FarmingTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingTipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FarmingTips
     * const farmingTip = await prisma.farmingTip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmingTipUpdateManyArgs>(args: SelectSubset<T, FarmingTipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FarmingTips and returns the data updated in the database.
     * @param {FarmingTipUpdateManyAndReturnArgs} args - Arguments to update many FarmingTips.
     * @example
     * // Update many FarmingTips
     * const farmingTip = await prisma.farmingTip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FarmingTips and only return the `id`
     * const farmingTipWithIdOnly = await prisma.farmingTip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FarmingTipUpdateManyAndReturnArgs>(args: SelectSubset<T, FarmingTipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FarmingTip.
     * @param {FarmingTipUpsertArgs} args - Arguments to update or create a FarmingTip.
     * @example
     * // Update or create a FarmingTip
     * const farmingTip = await prisma.farmingTip.upsert({
     *   create: {
     *     // ... data to create a FarmingTip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FarmingTip we want to update
     *   }
     * })
     */
    upsert<T extends FarmingTipUpsertArgs>(args: SelectSubset<T, FarmingTipUpsertArgs<ExtArgs>>): Prisma__FarmingTipClient<$Result.GetResult<Prisma.$FarmingTipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FarmingTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingTipCountArgs} args - Arguments to filter FarmingTips to count.
     * @example
     * // Count the number of FarmingTips
     * const count = await prisma.farmingTip.count({
     *   where: {
     *     // ... the filter for the FarmingTips we want to count
     *   }
     * })
    **/
    count<T extends FarmingTipCountArgs>(
      args?: Subset<T, FarmingTipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmingTipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FarmingTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingTipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FarmingTipAggregateArgs>(args: Subset<T, FarmingTipAggregateArgs>): Prisma.PrismaPromise<GetFarmingTipAggregateType<T>>

    /**
     * Group by FarmingTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingTipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FarmingTipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmingTipGroupByArgs['orderBy'] }
        : { orderBy?: FarmingTipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FarmingTipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmingTipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FarmingTip model
   */
  readonly fields: FarmingTipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FarmingTip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmingTipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FarmingTip model
   */
  interface FarmingTipFieldRefs {
    readonly id: FieldRef<"FarmingTip", 'String'>
    readonly tip: FieldRef<"FarmingTip", 'String'>
    readonly crop: FieldRef<"FarmingTip", 'String'>
    readonly region: FieldRef<"FarmingTip", 'String'>
    readonly date: FieldRef<"FarmingTip", 'DateTime'>
    readonly createdAt: FieldRef<"FarmingTip", 'DateTime'>
    readonly updatedAt: FieldRef<"FarmingTip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FarmingTip findUnique
   */
  export type FarmingTipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * Filter, which FarmingTip to fetch.
     */
    where: FarmingTipWhereUniqueInput
  }

  /**
   * FarmingTip findUniqueOrThrow
   */
  export type FarmingTipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * Filter, which FarmingTip to fetch.
     */
    where: FarmingTipWhereUniqueInput
  }

  /**
   * FarmingTip findFirst
   */
  export type FarmingTipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * Filter, which FarmingTip to fetch.
     */
    where?: FarmingTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmingTips to fetch.
     */
    orderBy?: FarmingTipOrderByWithRelationInput | FarmingTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmingTips.
     */
    cursor?: FarmingTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmingTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmingTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmingTips.
     */
    distinct?: FarmingTipScalarFieldEnum | FarmingTipScalarFieldEnum[]
  }

  /**
   * FarmingTip findFirstOrThrow
   */
  export type FarmingTipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * Filter, which FarmingTip to fetch.
     */
    where?: FarmingTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmingTips to fetch.
     */
    orderBy?: FarmingTipOrderByWithRelationInput | FarmingTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmingTips.
     */
    cursor?: FarmingTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmingTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmingTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmingTips.
     */
    distinct?: FarmingTipScalarFieldEnum | FarmingTipScalarFieldEnum[]
  }

  /**
   * FarmingTip findMany
   */
  export type FarmingTipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * Filter, which FarmingTips to fetch.
     */
    where?: FarmingTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmingTips to fetch.
     */
    orderBy?: FarmingTipOrderByWithRelationInput | FarmingTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FarmingTips.
     */
    cursor?: FarmingTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmingTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmingTips.
     */
    skip?: number
    distinct?: FarmingTipScalarFieldEnum | FarmingTipScalarFieldEnum[]
  }

  /**
   * FarmingTip create
   */
  export type FarmingTipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * The data needed to create a FarmingTip.
     */
    data: XOR<FarmingTipCreateInput, FarmingTipUncheckedCreateInput>
  }

  /**
   * FarmingTip createMany
   */
  export type FarmingTipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FarmingTips.
     */
    data: FarmingTipCreateManyInput | FarmingTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FarmingTip createManyAndReturn
   */
  export type FarmingTipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * The data used to create many FarmingTips.
     */
    data: FarmingTipCreateManyInput | FarmingTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FarmingTip update
   */
  export type FarmingTipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * The data needed to update a FarmingTip.
     */
    data: XOR<FarmingTipUpdateInput, FarmingTipUncheckedUpdateInput>
    /**
     * Choose, which FarmingTip to update.
     */
    where: FarmingTipWhereUniqueInput
  }

  /**
   * FarmingTip updateMany
   */
  export type FarmingTipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FarmingTips.
     */
    data: XOR<FarmingTipUpdateManyMutationInput, FarmingTipUncheckedUpdateManyInput>
    /**
     * Filter which FarmingTips to update
     */
    where?: FarmingTipWhereInput
    /**
     * Limit how many FarmingTips to update.
     */
    limit?: number
  }

  /**
   * FarmingTip updateManyAndReturn
   */
  export type FarmingTipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * The data used to update FarmingTips.
     */
    data: XOR<FarmingTipUpdateManyMutationInput, FarmingTipUncheckedUpdateManyInput>
    /**
     * Filter which FarmingTips to update
     */
    where?: FarmingTipWhereInput
    /**
     * Limit how many FarmingTips to update.
     */
    limit?: number
  }

  /**
   * FarmingTip upsert
   */
  export type FarmingTipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * The filter to search for the FarmingTip to update in case it exists.
     */
    where: FarmingTipWhereUniqueInput
    /**
     * In case the FarmingTip found by the `where` argument doesn't exist, create a new FarmingTip with this data.
     */
    create: XOR<FarmingTipCreateInput, FarmingTipUncheckedCreateInput>
    /**
     * In case the FarmingTip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmingTipUpdateInput, FarmingTipUncheckedUpdateInput>
  }

  /**
   * FarmingTip delete
   */
  export type FarmingTipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
    /**
     * Filter which FarmingTip to delete.
     */
    where: FarmingTipWhereUniqueInput
  }

  /**
   * FarmingTip deleteMany
   */
  export type FarmingTipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmingTips to delete
     */
    where?: FarmingTipWhereInput
    /**
     * Limit how many FarmingTips to delete.
     */
    limit?: number
  }

  /**
   * FarmingTip without action
   */
  export type FarmingTipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingTip
     */
    select?: FarmingTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmingTip
     */
    omit?: FarmingTipOmit<ExtArgs> | null
  }


  /**
   * Model Weather
   */

  export type AggregateWeather = {
    _count: WeatherCountAggregateOutputType | null
    _min: WeatherMinAggregateOutputType | null
    _max: WeatherMaxAggregateOutputType | null
  }

  export type WeatherMinAggregateOutputType = {
    id: string | null
    region: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeatherMaxAggregateOutputType = {
    id: string | null
    region: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeatherCountAggregateOutputType = {
    id: number
    region: number
    data: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeatherMinAggregateInputType = {
    id?: true
    region?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeatherMaxAggregateInputType = {
    id?: true
    region?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeatherCountAggregateInputType = {
    id?: true
    region?: true
    data?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeatherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weather to aggregate.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weathers
    **/
    _count?: true | WeatherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherMaxAggregateInputType
  }

  export type GetWeatherAggregateType<T extends WeatherAggregateArgs> = {
        [P in keyof T & keyof AggregateWeather]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeather[P]>
      : GetScalarType<T[P], AggregateWeather[P]>
  }




  export type WeatherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherWhereInput
    orderBy?: WeatherOrderByWithAggregationInput | WeatherOrderByWithAggregationInput[]
    by: WeatherScalarFieldEnum[] | WeatherScalarFieldEnum
    having?: WeatherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherCountAggregateInputType | true
    _min?: WeatherMinAggregateInputType
    _max?: WeatherMaxAggregateInputType
  }

  export type WeatherGroupByOutputType = {
    id: string
    region: string
    data: JsonValue
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: WeatherCountAggregateOutputType | null
    _min: WeatherMinAggregateOutputType | null
    _max: WeatherMaxAggregateOutputType | null
  }

  type GetWeatherGroupByPayload<T extends WeatherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherGroupByOutputType[P]>
        }
      >
    >


  export type WeatherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region?: boolean
    data?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weather"]>

  export type WeatherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region?: boolean
    data?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weather"]>

  export type WeatherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region?: boolean
    data?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weather"]>

  export type WeatherSelectScalar = {
    id?: boolean
    region?: boolean
    data?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeatherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "region" | "data" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["weather"]>

  export type $WeatherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weather"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      region: string
      data: Prisma.JsonValue
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weather"]>
    composites: {}
  }

  type WeatherGetPayload<S extends boolean | null | undefined | WeatherDefaultArgs> = $Result.GetResult<Prisma.$WeatherPayload, S>

  type WeatherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeatherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeatherCountAggregateInputType | true
    }

  export interface WeatherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weather'], meta: { name: 'Weather' } }
    /**
     * Find zero or one Weather that matches the filter.
     * @param {WeatherFindUniqueArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeatherFindUniqueArgs>(args: SelectSubset<T, WeatherFindUniqueArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Weather that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeatherFindUniqueOrThrowArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherFindUniqueOrThrowArgs>(args: SelectSubset<T, WeatherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weather that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindFirstArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeatherFindFirstArgs>(args?: SelectSubset<T, WeatherFindFirstArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weather that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindFirstOrThrowArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherFindFirstOrThrowArgs>(args?: SelectSubset<T, WeatherFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weathers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weathers
     * const weathers = await prisma.weather.findMany()
     * 
     * // Get first 10 Weathers
     * const weathers = await prisma.weather.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weatherWithIdOnly = await prisma.weather.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeatherFindManyArgs>(args?: SelectSubset<T, WeatherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Weather.
     * @param {WeatherCreateArgs} args - Arguments to create a Weather.
     * @example
     * // Create one Weather
     * const Weather = await prisma.weather.create({
     *   data: {
     *     // ... data to create a Weather
     *   }
     * })
     * 
     */
    create<T extends WeatherCreateArgs>(args: SelectSubset<T, WeatherCreateArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weathers.
     * @param {WeatherCreateManyArgs} args - Arguments to create many Weathers.
     * @example
     * // Create many Weathers
     * const weather = await prisma.weather.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeatherCreateManyArgs>(args?: SelectSubset<T, WeatherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weathers and returns the data saved in the database.
     * @param {WeatherCreateManyAndReturnArgs} args - Arguments to create many Weathers.
     * @example
     * // Create many Weathers
     * const weather = await prisma.weather.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weathers and only return the `id`
     * const weatherWithIdOnly = await prisma.weather.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeatherCreateManyAndReturnArgs>(args?: SelectSubset<T, WeatherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Weather.
     * @param {WeatherDeleteArgs} args - Arguments to delete one Weather.
     * @example
     * // Delete one Weather
     * const Weather = await prisma.weather.delete({
     *   where: {
     *     // ... filter to delete one Weather
     *   }
     * })
     * 
     */
    delete<T extends WeatherDeleteArgs>(args: SelectSubset<T, WeatherDeleteArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Weather.
     * @param {WeatherUpdateArgs} args - Arguments to update one Weather.
     * @example
     * // Update one Weather
     * const weather = await prisma.weather.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeatherUpdateArgs>(args: SelectSubset<T, WeatherUpdateArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weathers.
     * @param {WeatherDeleteManyArgs} args - Arguments to filter Weathers to delete.
     * @example
     * // Delete a few Weathers
     * const { count } = await prisma.weather.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeatherDeleteManyArgs>(args?: SelectSubset<T, WeatherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weathers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weathers
     * const weather = await prisma.weather.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeatherUpdateManyArgs>(args: SelectSubset<T, WeatherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weathers and returns the data updated in the database.
     * @param {WeatherUpdateManyAndReturnArgs} args - Arguments to update many Weathers.
     * @example
     * // Update many Weathers
     * const weather = await prisma.weather.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weathers and only return the `id`
     * const weatherWithIdOnly = await prisma.weather.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeatherUpdateManyAndReturnArgs>(args: SelectSubset<T, WeatherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Weather.
     * @param {WeatherUpsertArgs} args - Arguments to update or create a Weather.
     * @example
     * // Update or create a Weather
     * const weather = await prisma.weather.upsert({
     *   create: {
     *     // ... data to create a Weather
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weather we want to update
     *   }
     * })
     */
    upsert<T extends WeatherUpsertArgs>(args: SelectSubset<T, WeatherUpsertArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weathers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCountArgs} args - Arguments to filter Weathers to count.
     * @example
     * // Count the number of Weathers
     * const count = await prisma.weather.count({
     *   where: {
     *     // ... the filter for the Weathers we want to count
     *   }
     * })
    **/
    count<T extends WeatherCountArgs>(
      args?: Subset<T, WeatherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weather.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeatherAggregateArgs>(args: Subset<T, WeatherAggregateArgs>): Prisma.PrismaPromise<GetWeatherAggregateType<T>>

    /**
     * Group by Weather.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeatherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherGroupByArgs['orderBy'] }
        : { orderBy?: WeatherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeatherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weather model
   */
  readonly fields: WeatherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weather.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Weather model
   */
  interface WeatherFieldRefs {
    readonly id: FieldRef<"Weather", 'String'>
    readonly region: FieldRef<"Weather", 'String'>
    readonly data: FieldRef<"Weather", 'Json'>
    readonly date: FieldRef<"Weather", 'DateTime'>
    readonly createdAt: FieldRef<"Weather", 'DateTime'>
    readonly updatedAt: FieldRef<"Weather", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Weather findUnique
   */
  export type WeatherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather findUniqueOrThrow
   */
  export type WeatherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather findFirst
   */
  export type WeatherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weathers.
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weathers.
     */
    distinct?: WeatherScalarFieldEnum | WeatherScalarFieldEnum[]
  }

  /**
   * Weather findFirstOrThrow
   */
  export type WeatherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weathers.
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weathers.
     */
    distinct?: WeatherScalarFieldEnum | WeatherScalarFieldEnum[]
  }

  /**
   * Weather findMany
   */
  export type WeatherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Filter, which Weathers to fetch.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weathers.
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    distinct?: WeatherScalarFieldEnum | WeatherScalarFieldEnum[]
  }

  /**
   * Weather create
   */
  export type WeatherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * The data needed to create a Weather.
     */
    data: XOR<WeatherCreateInput, WeatherUncheckedCreateInput>
  }

  /**
   * Weather createMany
   */
  export type WeatherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weathers.
     */
    data: WeatherCreateManyInput | WeatherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weather createManyAndReturn
   */
  export type WeatherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * The data used to create many Weathers.
     */
    data: WeatherCreateManyInput | WeatherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weather update
   */
  export type WeatherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * The data needed to update a Weather.
     */
    data: XOR<WeatherUpdateInput, WeatherUncheckedUpdateInput>
    /**
     * Choose, which Weather to update.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather updateMany
   */
  export type WeatherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weathers.
     */
    data: XOR<WeatherUpdateManyMutationInput, WeatherUncheckedUpdateManyInput>
    /**
     * Filter which Weathers to update
     */
    where?: WeatherWhereInput
    /**
     * Limit how many Weathers to update.
     */
    limit?: number
  }

  /**
   * Weather updateManyAndReturn
   */
  export type WeatherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * The data used to update Weathers.
     */
    data: XOR<WeatherUpdateManyMutationInput, WeatherUncheckedUpdateManyInput>
    /**
     * Filter which Weathers to update
     */
    where?: WeatherWhereInput
    /**
     * Limit how many Weathers to update.
     */
    limit?: number
  }

  /**
   * Weather upsert
   */
  export type WeatherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * The filter to search for the Weather to update in case it exists.
     */
    where: WeatherWhereUniqueInput
    /**
     * In case the Weather found by the `where` argument doesn't exist, create a new Weather with this data.
     */
    create: XOR<WeatherCreateInput, WeatherUncheckedCreateInput>
    /**
     * In case the Weather was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherUpdateInput, WeatherUncheckedUpdateInput>
  }

  /**
   * Weather delete
   */
  export type WeatherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Filter which Weather to delete.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather deleteMany
   */
  export type WeatherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weathers to delete
     */
    where?: WeatherWhereInput
    /**
     * Limit how many Weathers to delete.
     */
    limit?: number
  }

  /**
   * Weather without action
   */
  export type WeatherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    region: 'region',
    phone: 'phone',
    profilePicture: 'profilePicture',
    bio: 'bio',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CropRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cropType: 'cropType',
    plantingDate: 'plantingDate',
    harvestingDate: 'harvestingDate',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CropRecordScalarFieldEnum = (typeof CropRecordScalarFieldEnum)[keyof typeof CropRecordScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    cropRecordId: 'cropRecordId',
    item: 'item',
    cost: 'cost',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const YieldScalarFieldEnum: {
    id: 'id',
    cropRecordId: 'cropRecordId',
    quantity: 'quantity',
    unit: 'unit',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type YieldScalarFieldEnum = (typeof YieldScalarFieldEnum)[keyof typeof YieldScalarFieldEnum]


  export const MarketPriceScalarFieldEnum: {
    id: 'id',
    crop: 'crop',
    region: 'region',
    price: 'price',
    unit: 'unit',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarketPriceScalarFieldEnum = (typeof MarketPriceScalarFieldEnum)[keyof typeof MarketPriceScalarFieldEnum]


  export const FarmingTipScalarFieldEnum: {
    id: 'id',
    tip: 'tip',
    crop: 'crop',
    region: 'region',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FarmingTipScalarFieldEnum = (typeof FarmingTipScalarFieldEnum)[keyof typeof FarmingTipScalarFieldEnum]


  export const WeatherScalarFieldEnum: {
    id: 'id',
    region: 'region',
    data: 'data',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeatherScalarFieldEnum = (typeof WeatherScalarFieldEnum)[keyof typeof WeatherScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    region?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    records?: CropRecordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    region?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    records?: CropRecordOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    region?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    records?: CropRecordListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    region?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    region?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CropRecordWhereInput = {
    AND?: CropRecordWhereInput | CropRecordWhereInput[]
    OR?: CropRecordWhereInput[]
    NOT?: CropRecordWhereInput | CropRecordWhereInput[]
    id?: StringFilter<"CropRecord"> | string
    userId?: StringFilter<"CropRecord"> | string
    cropType?: StringFilter<"CropRecord"> | string
    plantingDate?: DateTimeFilter<"CropRecord"> | Date | string
    harvestingDate?: DateTimeNullableFilter<"CropRecord"> | Date | string | null
    notes?: StringNullableFilter<"CropRecord"> | string | null
    createdAt?: DateTimeFilter<"CropRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CropRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    expenses?: ExpenseListRelationFilter
    yields?: YieldListRelationFilter
  }

  export type CropRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cropType?: SortOrder
    plantingDate?: SortOrder
    harvestingDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    expenses?: ExpenseOrderByRelationAggregateInput
    yields?: YieldOrderByRelationAggregateInput
  }

  export type CropRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CropRecordWhereInput | CropRecordWhereInput[]
    OR?: CropRecordWhereInput[]
    NOT?: CropRecordWhereInput | CropRecordWhereInput[]
    userId?: StringFilter<"CropRecord"> | string
    cropType?: StringFilter<"CropRecord"> | string
    plantingDate?: DateTimeFilter<"CropRecord"> | Date | string
    harvestingDate?: DateTimeNullableFilter<"CropRecord"> | Date | string | null
    notes?: StringNullableFilter<"CropRecord"> | string | null
    createdAt?: DateTimeFilter<"CropRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CropRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    expenses?: ExpenseListRelationFilter
    yields?: YieldListRelationFilter
  }, "id">

  export type CropRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cropType?: SortOrder
    plantingDate?: SortOrder
    harvestingDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CropRecordCountOrderByAggregateInput
    _max?: CropRecordMaxOrderByAggregateInput
    _min?: CropRecordMinOrderByAggregateInput
  }

  export type CropRecordScalarWhereWithAggregatesInput = {
    AND?: CropRecordScalarWhereWithAggregatesInput | CropRecordScalarWhereWithAggregatesInput[]
    OR?: CropRecordScalarWhereWithAggregatesInput[]
    NOT?: CropRecordScalarWhereWithAggregatesInput | CropRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CropRecord"> | string
    userId?: StringWithAggregatesFilter<"CropRecord"> | string
    cropType?: StringWithAggregatesFilter<"CropRecord"> | string
    plantingDate?: DateTimeWithAggregatesFilter<"CropRecord"> | Date | string
    harvestingDate?: DateTimeNullableWithAggregatesFilter<"CropRecord"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"CropRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CropRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CropRecord"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    cropRecordId?: StringFilter<"Expense"> | string
    item?: StringFilter<"Expense"> | string
    cost?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    cropRecord?: XOR<CropRecordScalarRelationFilter, CropRecordWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    cropRecordId?: SortOrder
    item?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cropRecord?: CropRecordOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    cropRecordId?: StringFilter<"Expense"> | string
    item?: StringFilter<"Expense"> | string
    cost?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    cropRecord?: XOR<CropRecordScalarRelationFilter, CropRecordWhereInput>
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    cropRecordId?: SortOrder
    item?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    cropRecordId?: StringWithAggregatesFilter<"Expense"> | string
    item?: StringWithAggregatesFilter<"Expense"> | string
    cost?: FloatWithAggregatesFilter<"Expense"> | number
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type YieldWhereInput = {
    AND?: YieldWhereInput | YieldWhereInput[]
    OR?: YieldWhereInput[]
    NOT?: YieldWhereInput | YieldWhereInput[]
    id?: StringFilter<"Yield"> | string
    cropRecordId?: StringFilter<"Yield"> | string
    quantity?: FloatFilter<"Yield"> | number
    unit?: StringFilter<"Yield"> | string
    date?: DateTimeFilter<"Yield"> | Date | string
    createdAt?: DateTimeFilter<"Yield"> | Date | string
    updatedAt?: DateTimeFilter<"Yield"> | Date | string
    cropRecord?: XOR<CropRecordScalarRelationFilter, CropRecordWhereInput>
  }

  export type YieldOrderByWithRelationInput = {
    id?: SortOrder
    cropRecordId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cropRecord?: CropRecordOrderByWithRelationInput
  }

  export type YieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: YieldWhereInput | YieldWhereInput[]
    OR?: YieldWhereInput[]
    NOT?: YieldWhereInput | YieldWhereInput[]
    cropRecordId?: StringFilter<"Yield"> | string
    quantity?: FloatFilter<"Yield"> | number
    unit?: StringFilter<"Yield"> | string
    date?: DateTimeFilter<"Yield"> | Date | string
    createdAt?: DateTimeFilter<"Yield"> | Date | string
    updatedAt?: DateTimeFilter<"Yield"> | Date | string
    cropRecord?: XOR<CropRecordScalarRelationFilter, CropRecordWhereInput>
  }, "id">

  export type YieldOrderByWithAggregationInput = {
    id?: SortOrder
    cropRecordId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: YieldCountOrderByAggregateInput
    _avg?: YieldAvgOrderByAggregateInput
    _max?: YieldMaxOrderByAggregateInput
    _min?: YieldMinOrderByAggregateInput
    _sum?: YieldSumOrderByAggregateInput
  }

  export type YieldScalarWhereWithAggregatesInput = {
    AND?: YieldScalarWhereWithAggregatesInput | YieldScalarWhereWithAggregatesInput[]
    OR?: YieldScalarWhereWithAggregatesInput[]
    NOT?: YieldScalarWhereWithAggregatesInput | YieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Yield"> | string
    cropRecordId?: StringWithAggregatesFilter<"Yield"> | string
    quantity?: FloatWithAggregatesFilter<"Yield"> | number
    unit?: StringWithAggregatesFilter<"Yield"> | string
    date?: DateTimeWithAggregatesFilter<"Yield"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Yield"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Yield"> | Date | string
  }

  export type MarketPriceWhereInput = {
    AND?: MarketPriceWhereInput | MarketPriceWhereInput[]
    OR?: MarketPriceWhereInput[]
    NOT?: MarketPriceWhereInput | MarketPriceWhereInput[]
    id?: StringFilter<"MarketPrice"> | string
    crop?: StringFilter<"MarketPrice"> | string
    region?: StringFilter<"MarketPrice"> | string
    price?: FloatFilter<"MarketPrice"> | number
    unit?: StringFilter<"MarketPrice"> | string
    date?: DateTimeFilter<"MarketPrice"> | Date | string
    createdAt?: DateTimeFilter<"MarketPrice"> | Date | string
    updatedAt?: DateTimeFilter<"MarketPrice"> | Date | string
  }

  export type MarketPriceOrderByWithRelationInput = {
    id?: SortOrder
    crop?: SortOrder
    region?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    crop_region_date?: MarketPriceCropRegionDateCompoundUniqueInput
    AND?: MarketPriceWhereInput | MarketPriceWhereInput[]
    OR?: MarketPriceWhereInput[]
    NOT?: MarketPriceWhereInput | MarketPriceWhereInput[]
    crop?: StringFilter<"MarketPrice"> | string
    region?: StringFilter<"MarketPrice"> | string
    price?: FloatFilter<"MarketPrice"> | number
    unit?: StringFilter<"MarketPrice"> | string
    date?: DateTimeFilter<"MarketPrice"> | Date | string
    createdAt?: DateTimeFilter<"MarketPrice"> | Date | string
    updatedAt?: DateTimeFilter<"MarketPrice"> | Date | string
  }, "id" | "crop_region_date">

  export type MarketPriceOrderByWithAggregationInput = {
    id?: SortOrder
    crop?: SortOrder
    region?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarketPriceCountOrderByAggregateInput
    _avg?: MarketPriceAvgOrderByAggregateInput
    _max?: MarketPriceMaxOrderByAggregateInput
    _min?: MarketPriceMinOrderByAggregateInput
    _sum?: MarketPriceSumOrderByAggregateInput
  }

  export type MarketPriceScalarWhereWithAggregatesInput = {
    AND?: MarketPriceScalarWhereWithAggregatesInput | MarketPriceScalarWhereWithAggregatesInput[]
    OR?: MarketPriceScalarWhereWithAggregatesInput[]
    NOT?: MarketPriceScalarWhereWithAggregatesInput | MarketPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketPrice"> | string
    crop?: StringWithAggregatesFilter<"MarketPrice"> | string
    region?: StringWithAggregatesFilter<"MarketPrice"> | string
    price?: FloatWithAggregatesFilter<"MarketPrice"> | number
    unit?: StringWithAggregatesFilter<"MarketPrice"> | string
    date?: DateTimeWithAggregatesFilter<"MarketPrice"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MarketPrice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MarketPrice"> | Date | string
  }

  export type FarmingTipWhereInput = {
    AND?: FarmingTipWhereInput | FarmingTipWhereInput[]
    OR?: FarmingTipWhereInput[]
    NOT?: FarmingTipWhereInput | FarmingTipWhereInput[]
    id?: StringFilter<"FarmingTip"> | string
    tip?: StringFilter<"FarmingTip"> | string
    crop?: StringNullableFilter<"FarmingTip"> | string | null
    region?: StringNullableFilter<"FarmingTip"> | string | null
    date?: DateTimeFilter<"FarmingTip"> | Date | string
    createdAt?: DateTimeFilter<"FarmingTip"> | Date | string
    updatedAt?: DateTimeFilter<"FarmingTip"> | Date | string
  }

  export type FarmingTipOrderByWithRelationInput = {
    id?: SortOrder
    tip?: SortOrder
    crop?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmingTipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FarmingTipWhereInput | FarmingTipWhereInput[]
    OR?: FarmingTipWhereInput[]
    NOT?: FarmingTipWhereInput | FarmingTipWhereInput[]
    tip?: StringFilter<"FarmingTip"> | string
    crop?: StringNullableFilter<"FarmingTip"> | string | null
    region?: StringNullableFilter<"FarmingTip"> | string | null
    date?: DateTimeFilter<"FarmingTip"> | Date | string
    createdAt?: DateTimeFilter<"FarmingTip"> | Date | string
    updatedAt?: DateTimeFilter<"FarmingTip"> | Date | string
  }, "id">

  export type FarmingTipOrderByWithAggregationInput = {
    id?: SortOrder
    tip?: SortOrder
    crop?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FarmingTipCountOrderByAggregateInput
    _max?: FarmingTipMaxOrderByAggregateInput
    _min?: FarmingTipMinOrderByAggregateInput
  }

  export type FarmingTipScalarWhereWithAggregatesInput = {
    AND?: FarmingTipScalarWhereWithAggregatesInput | FarmingTipScalarWhereWithAggregatesInput[]
    OR?: FarmingTipScalarWhereWithAggregatesInput[]
    NOT?: FarmingTipScalarWhereWithAggregatesInput | FarmingTipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FarmingTip"> | string
    tip?: StringWithAggregatesFilter<"FarmingTip"> | string
    crop?: StringNullableWithAggregatesFilter<"FarmingTip"> | string | null
    region?: StringNullableWithAggregatesFilter<"FarmingTip"> | string | null
    date?: DateTimeWithAggregatesFilter<"FarmingTip"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"FarmingTip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FarmingTip"> | Date | string
  }

  export type WeatherWhereInput = {
    AND?: WeatherWhereInput | WeatherWhereInput[]
    OR?: WeatherWhereInput[]
    NOT?: WeatherWhereInput | WeatherWhereInput[]
    id?: StringFilter<"Weather"> | string
    region?: StringFilter<"Weather"> | string
    data?: JsonFilter<"Weather">
    date?: DateTimeFilter<"Weather"> | Date | string
    createdAt?: DateTimeFilter<"Weather"> | Date | string
    updatedAt?: DateTimeFilter<"Weather"> | Date | string
  }

  export type WeatherOrderByWithRelationInput = {
    id?: SortOrder
    region?: SortOrder
    data?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    region_date?: WeatherRegionDateCompoundUniqueInput
    AND?: WeatherWhereInput | WeatherWhereInput[]
    OR?: WeatherWhereInput[]
    NOT?: WeatherWhereInput | WeatherWhereInput[]
    region?: StringFilter<"Weather"> | string
    data?: JsonFilter<"Weather">
    date?: DateTimeFilter<"Weather"> | Date | string
    createdAt?: DateTimeFilter<"Weather"> | Date | string
    updatedAt?: DateTimeFilter<"Weather"> | Date | string
  }, "id" | "region_date">

  export type WeatherOrderByWithAggregationInput = {
    id?: SortOrder
    region?: SortOrder
    data?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeatherCountOrderByAggregateInput
    _max?: WeatherMaxOrderByAggregateInput
    _min?: WeatherMinOrderByAggregateInput
  }

  export type WeatherScalarWhereWithAggregatesInput = {
    AND?: WeatherScalarWhereWithAggregatesInput | WeatherScalarWhereWithAggregatesInput[]
    OR?: WeatherScalarWhereWithAggregatesInput[]
    NOT?: WeatherScalarWhereWithAggregatesInput | WeatherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Weather"> | string
    region?: StringWithAggregatesFilter<"Weather"> | string
    data?: JsonWithAggregatesFilter<"Weather">
    date?: DateTimeWithAggregatesFilter<"Weather"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Weather"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Weather"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    region: string
    phone: string
    profilePicture?: string | null
    bio?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: CropRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    region: string
    phone: string
    profilePicture?: string | null
    bio?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: CropRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    region?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: CropRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    region?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: CropRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    region: string
    phone: string
    profilePicture?: string | null
    bio?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    region?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    region?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropRecordCreateInput = {
    id?: string
    cropType: string
    plantingDate: Date | string
    harvestingDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecordsInput
    expenses?: ExpenseCreateNestedManyWithoutCropRecordInput
    yields?: YieldCreateNestedManyWithoutCropRecordInput
  }

  export type CropRecordUncheckedCreateInput = {
    id?: string
    userId: string
    cropType: string
    plantingDate: Date | string
    harvestingDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCropRecordInput
    yields?: YieldUncheckedCreateNestedManyWithoutCropRecordInput
  }

  export type CropRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
    expenses?: ExpenseUpdateManyWithoutCropRecordNestedInput
    yields?: YieldUpdateManyWithoutCropRecordNestedInput
  }

  export type CropRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutCropRecordNestedInput
    yields?: YieldUncheckedUpdateManyWithoutCropRecordNestedInput
  }

  export type CropRecordCreateManyInput = {
    id?: string
    userId: string
    cropType: string
    plantingDate: Date | string
    harvestingDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CropRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    id?: string
    item: string
    cost: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cropRecord: CropRecordCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    cropRecordId: string
    item: string
    cost: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cropRecord?: CropRecordUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropRecordId?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyInput = {
    id?: string
    cropRecordId: string
    item: string
    cost: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropRecordId?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldCreateInput = {
    id?: string
    quantity: number
    unit: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cropRecord: CropRecordCreateNestedOneWithoutYieldsInput
  }

  export type YieldUncheckedCreateInput = {
    id?: string
    cropRecordId: string
    quantity: number
    unit: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cropRecord?: CropRecordUpdateOneRequiredWithoutYieldsNestedInput
  }

  export type YieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropRecordId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldCreateManyInput = {
    id?: string
    cropRecordId: string
    quantity: number
    unit: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropRecordId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketPriceCreateInput = {
    id?: string
    crop: string
    region: string
    price: number
    unit: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketPriceUncheckedCreateInput = {
    id?: string
    crop: string
    region: string
    price: number
    unit: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketPriceCreateManyInput = {
    id?: string
    crop: string
    region: string
    price: number
    unit: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmingTipCreateInput = {
    id?: string
    tip: string
    crop?: string | null
    region?: string | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmingTipUncheckedCreateInput = {
    id?: string
    tip: string
    crop?: string | null
    region?: string | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmingTipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tip?: StringFieldUpdateOperationsInput | string
    crop?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmingTipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tip?: StringFieldUpdateOperationsInput | string
    crop?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmingTipCreateManyInput = {
    id?: string
    tip: string
    crop?: string | null
    region?: string | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmingTipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tip?: StringFieldUpdateOperationsInput | string
    crop?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmingTipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tip?: StringFieldUpdateOperationsInput | string
    crop?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherCreateInput = {
    id?: string
    region: string
    data: JsonNullValueInput | InputJsonValue
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeatherUncheckedCreateInput = {
    id?: string
    region: string
    data: JsonNullValueInput | InputJsonValue
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeatherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherCreateManyInput = {
    id?: string
    region: string
    data: JsonNullValueInput | InputJsonValue
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeatherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CropRecordListRelationFilter = {
    every?: CropRecordWhereInput
    some?: CropRecordWhereInput
    none?: CropRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CropRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    region?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    region?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    region?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type YieldListRelationFilter = {
    every?: YieldWhereInput
    some?: YieldWhereInput
    none?: YieldWhereInput
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CropRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cropType?: SortOrder
    plantingDate?: SortOrder
    harvestingDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CropRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cropType?: SortOrder
    plantingDate?: SortOrder
    harvestingDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CropRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cropType?: SortOrder
    plantingDate?: SortOrder
    harvestingDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CropRecordScalarRelationFilter = {
    is?: CropRecordWhereInput
    isNot?: CropRecordWhereInput
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    cropRecordId?: SortOrder
    item?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    cropRecordId?: SortOrder
    item?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    cropRecordId?: SortOrder
    item?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type YieldCountOrderByAggregateInput = {
    id?: SortOrder
    cropRecordId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YieldAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type YieldMaxOrderByAggregateInput = {
    id?: SortOrder
    cropRecordId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YieldMinOrderByAggregateInput = {
    id?: SortOrder
    cropRecordId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YieldSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type MarketPriceCropRegionDateCompoundUniqueInput = {
    crop: string
    region: string
    date: Date | string
  }

  export type MarketPriceCountOrderByAggregateInput = {
    id?: SortOrder
    crop?: SortOrder
    region?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketPriceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type MarketPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    crop?: SortOrder
    region?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketPriceMinOrderByAggregateInput = {
    id?: SortOrder
    crop?: SortOrder
    region?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketPriceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FarmingTipCountOrderByAggregateInput = {
    id?: SortOrder
    tip?: SortOrder
    crop?: SortOrder
    region?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmingTipMaxOrderByAggregateInput = {
    id?: SortOrder
    tip?: SortOrder
    crop?: SortOrder
    region?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmingTipMinOrderByAggregateInput = {
    id?: SortOrder
    tip?: SortOrder
    crop?: SortOrder
    region?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WeatherRegionDateCompoundUniqueInput = {
    region: string
    date: Date | string
  }

  export type WeatherCountOrderByAggregateInput = {
    id?: SortOrder
    region?: SortOrder
    data?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherMaxOrderByAggregateInput = {
    id?: SortOrder
    region?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherMinOrderByAggregateInput = {
    id?: SortOrder
    region?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CropRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<CropRecordCreateWithoutUserInput, CropRecordUncheckedCreateWithoutUserInput> | CropRecordCreateWithoutUserInput[] | CropRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CropRecordCreateOrConnectWithoutUserInput | CropRecordCreateOrConnectWithoutUserInput[]
    createMany?: CropRecordCreateManyUserInputEnvelope
    connect?: CropRecordWhereUniqueInput | CropRecordWhereUniqueInput[]
  }

  export type CropRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CropRecordCreateWithoutUserInput, CropRecordUncheckedCreateWithoutUserInput> | CropRecordCreateWithoutUserInput[] | CropRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CropRecordCreateOrConnectWithoutUserInput | CropRecordCreateOrConnectWithoutUserInput[]
    createMany?: CropRecordCreateManyUserInputEnvelope
    connect?: CropRecordWhereUniqueInput | CropRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CropRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<CropRecordCreateWithoutUserInput, CropRecordUncheckedCreateWithoutUserInput> | CropRecordCreateWithoutUserInput[] | CropRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CropRecordCreateOrConnectWithoutUserInput | CropRecordCreateOrConnectWithoutUserInput[]
    upsert?: CropRecordUpsertWithWhereUniqueWithoutUserInput | CropRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CropRecordCreateManyUserInputEnvelope
    set?: CropRecordWhereUniqueInput | CropRecordWhereUniqueInput[]
    disconnect?: CropRecordWhereUniqueInput | CropRecordWhereUniqueInput[]
    delete?: CropRecordWhereUniqueInput | CropRecordWhereUniqueInput[]
    connect?: CropRecordWhereUniqueInput | CropRecordWhereUniqueInput[]
    update?: CropRecordUpdateWithWhereUniqueWithoutUserInput | CropRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CropRecordUpdateManyWithWhereWithoutUserInput | CropRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CropRecordScalarWhereInput | CropRecordScalarWhereInput[]
  }

  export type CropRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CropRecordCreateWithoutUserInput, CropRecordUncheckedCreateWithoutUserInput> | CropRecordCreateWithoutUserInput[] | CropRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CropRecordCreateOrConnectWithoutUserInput | CropRecordCreateOrConnectWithoutUserInput[]
    upsert?: CropRecordUpsertWithWhereUniqueWithoutUserInput | CropRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CropRecordCreateManyUserInputEnvelope
    set?: CropRecordWhereUniqueInput | CropRecordWhereUniqueInput[]
    disconnect?: CropRecordWhereUniqueInput | CropRecordWhereUniqueInput[]
    delete?: CropRecordWhereUniqueInput | CropRecordWhereUniqueInput[]
    connect?: CropRecordWhereUniqueInput | CropRecordWhereUniqueInput[]
    update?: CropRecordUpdateWithWhereUniqueWithoutUserInput | CropRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CropRecordUpdateManyWithWhereWithoutUserInput | CropRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CropRecordScalarWhereInput | CropRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecordsInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseCreateNestedManyWithoutCropRecordInput = {
    create?: XOR<ExpenseCreateWithoutCropRecordInput, ExpenseUncheckedCreateWithoutCropRecordInput> | ExpenseCreateWithoutCropRecordInput[] | ExpenseUncheckedCreateWithoutCropRecordInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCropRecordInput | ExpenseCreateOrConnectWithoutCropRecordInput[]
    createMany?: ExpenseCreateManyCropRecordInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type YieldCreateNestedManyWithoutCropRecordInput = {
    create?: XOR<YieldCreateWithoutCropRecordInput, YieldUncheckedCreateWithoutCropRecordInput> | YieldCreateWithoutCropRecordInput[] | YieldUncheckedCreateWithoutCropRecordInput[]
    connectOrCreate?: YieldCreateOrConnectWithoutCropRecordInput | YieldCreateOrConnectWithoutCropRecordInput[]
    createMany?: YieldCreateManyCropRecordInputEnvelope
    connect?: YieldWhereUniqueInput | YieldWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCropRecordInput = {
    create?: XOR<ExpenseCreateWithoutCropRecordInput, ExpenseUncheckedCreateWithoutCropRecordInput> | ExpenseCreateWithoutCropRecordInput[] | ExpenseUncheckedCreateWithoutCropRecordInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCropRecordInput | ExpenseCreateOrConnectWithoutCropRecordInput[]
    createMany?: ExpenseCreateManyCropRecordInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type YieldUncheckedCreateNestedManyWithoutCropRecordInput = {
    create?: XOR<YieldCreateWithoutCropRecordInput, YieldUncheckedCreateWithoutCropRecordInput> | YieldCreateWithoutCropRecordInput[] | YieldUncheckedCreateWithoutCropRecordInput[]
    connectOrCreate?: YieldCreateOrConnectWithoutCropRecordInput | YieldCreateOrConnectWithoutCropRecordInput[]
    createMany?: YieldCreateManyCropRecordInputEnvelope
    connect?: YieldWhereUniqueInput | YieldWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    upsert?: UserUpsertWithoutRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecordsInput, UserUpdateWithoutRecordsInput>, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type ExpenseUpdateManyWithoutCropRecordNestedInput = {
    create?: XOR<ExpenseCreateWithoutCropRecordInput, ExpenseUncheckedCreateWithoutCropRecordInput> | ExpenseCreateWithoutCropRecordInput[] | ExpenseUncheckedCreateWithoutCropRecordInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCropRecordInput | ExpenseCreateOrConnectWithoutCropRecordInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCropRecordInput | ExpenseUpsertWithWhereUniqueWithoutCropRecordInput[]
    createMany?: ExpenseCreateManyCropRecordInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCropRecordInput | ExpenseUpdateWithWhereUniqueWithoutCropRecordInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCropRecordInput | ExpenseUpdateManyWithWhereWithoutCropRecordInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type YieldUpdateManyWithoutCropRecordNestedInput = {
    create?: XOR<YieldCreateWithoutCropRecordInput, YieldUncheckedCreateWithoutCropRecordInput> | YieldCreateWithoutCropRecordInput[] | YieldUncheckedCreateWithoutCropRecordInput[]
    connectOrCreate?: YieldCreateOrConnectWithoutCropRecordInput | YieldCreateOrConnectWithoutCropRecordInput[]
    upsert?: YieldUpsertWithWhereUniqueWithoutCropRecordInput | YieldUpsertWithWhereUniqueWithoutCropRecordInput[]
    createMany?: YieldCreateManyCropRecordInputEnvelope
    set?: YieldWhereUniqueInput | YieldWhereUniqueInput[]
    disconnect?: YieldWhereUniqueInput | YieldWhereUniqueInput[]
    delete?: YieldWhereUniqueInput | YieldWhereUniqueInput[]
    connect?: YieldWhereUniqueInput | YieldWhereUniqueInput[]
    update?: YieldUpdateWithWhereUniqueWithoutCropRecordInput | YieldUpdateWithWhereUniqueWithoutCropRecordInput[]
    updateMany?: YieldUpdateManyWithWhereWithoutCropRecordInput | YieldUpdateManyWithWhereWithoutCropRecordInput[]
    deleteMany?: YieldScalarWhereInput | YieldScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCropRecordNestedInput = {
    create?: XOR<ExpenseCreateWithoutCropRecordInput, ExpenseUncheckedCreateWithoutCropRecordInput> | ExpenseCreateWithoutCropRecordInput[] | ExpenseUncheckedCreateWithoutCropRecordInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCropRecordInput | ExpenseCreateOrConnectWithoutCropRecordInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCropRecordInput | ExpenseUpsertWithWhereUniqueWithoutCropRecordInput[]
    createMany?: ExpenseCreateManyCropRecordInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCropRecordInput | ExpenseUpdateWithWhereUniqueWithoutCropRecordInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCropRecordInput | ExpenseUpdateManyWithWhereWithoutCropRecordInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type YieldUncheckedUpdateManyWithoutCropRecordNestedInput = {
    create?: XOR<YieldCreateWithoutCropRecordInput, YieldUncheckedCreateWithoutCropRecordInput> | YieldCreateWithoutCropRecordInput[] | YieldUncheckedCreateWithoutCropRecordInput[]
    connectOrCreate?: YieldCreateOrConnectWithoutCropRecordInput | YieldCreateOrConnectWithoutCropRecordInput[]
    upsert?: YieldUpsertWithWhereUniqueWithoutCropRecordInput | YieldUpsertWithWhereUniqueWithoutCropRecordInput[]
    createMany?: YieldCreateManyCropRecordInputEnvelope
    set?: YieldWhereUniqueInput | YieldWhereUniqueInput[]
    disconnect?: YieldWhereUniqueInput | YieldWhereUniqueInput[]
    delete?: YieldWhereUniqueInput | YieldWhereUniqueInput[]
    connect?: YieldWhereUniqueInput | YieldWhereUniqueInput[]
    update?: YieldUpdateWithWhereUniqueWithoutCropRecordInput | YieldUpdateWithWhereUniqueWithoutCropRecordInput[]
    updateMany?: YieldUpdateManyWithWhereWithoutCropRecordInput | YieldUpdateManyWithWhereWithoutCropRecordInput[]
    deleteMany?: YieldScalarWhereInput | YieldScalarWhereInput[]
  }

  export type CropRecordCreateNestedOneWithoutExpensesInput = {
    create?: XOR<CropRecordCreateWithoutExpensesInput, CropRecordUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CropRecordCreateOrConnectWithoutExpensesInput
    connect?: CropRecordWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CropRecordUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<CropRecordCreateWithoutExpensesInput, CropRecordUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CropRecordCreateOrConnectWithoutExpensesInput
    upsert?: CropRecordUpsertWithoutExpensesInput
    connect?: CropRecordWhereUniqueInput
    update?: XOR<XOR<CropRecordUpdateToOneWithWhereWithoutExpensesInput, CropRecordUpdateWithoutExpensesInput>, CropRecordUncheckedUpdateWithoutExpensesInput>
  }

  export type CropRecordCreateNestedOneWithoutYieldsInput = {
    create?: XOR<CropRecordCreateWithoutYieldsInput, CropRecordUncheckedCreateWithoutYieldsInput>
    connectOrCreate?: CropRecordCreateOrConnectWithoutYieldsInput
    connect?: CropRecordWhereUniqueInput
  }

  export type CropRecordUpdateOneRequiredWithoutYieldsNestedInput = {
    create?: XOR<CropRecordCreateWithoutYieldsInput, CropRecordUncheckedCreateWithoutYieldsInput>
    connectOrCreate?: CropRecordCreateOrConnectWithoutYieldsInput
    upsert?: CropRecordUpsertWithoutYieldsInput
    connect?: CropRecordWhereUniqueInput
    update?: XOR<XOR<CropRecordUpdateToOneWithWhereWithoutYieldsInput, CropRecordUpdateWithoutYieldsInput>, CropRecordUncheckedUpdateWithoutYieldsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CropRecordCreateWithoutUserInput = {
    id?: string
    cropType: string
    plantingDate: Date | string
    harvestingDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseCreateNestedManyWithoutCropRecordInput
    yields?: YieldCreateNestedManyWithoutCropRecordInput
  }

  export type CropRecordUncheckedCreateWithoutUserInput = {
    id?: string
    cropType: string
    plantingDate: Date | string
    harvestingDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCropRecordInput
    yields?: YieldUncheckedCreateNestedManyWithoutCropRecordInput
  }

  export type CropRecordCreateOrConnectWithoutUserInput = {
    where: CropRecordWhereUniqueInput
    create: XOR<CropRecordCreateWithoutUserInput, CropRecordUncheckedCreateWithoutUserInput>
  }

  export type CropRecordCreateManyUserInputEnvelope = {
    data: CropRecordCreateManyUserInput | CropRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CropRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: CropRecordWhereUniqueInput
    update: XOR<CropRecordUpdateWithoutUserInput, CropRecordUncheckedUpdateWithoutUserInput>
    create: XOR<CropRecordCreateWithoutUserInput, CropRecordUncheckedCreateWithoutUserInput>
  }

  export type CropRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: CropRecordWhereUniqueInput
    data: XOR<CropRecordUpdateWithoutUserInput, CropRecordUncheckedUpdateWithoutUserInput>
  }

  export type CropRecordUpdateManyWithWhereWithoutUserInput = {
    where: CropRecordScalarWhereInput
    data: XOR<CropRecordUpdateManyMutationInput, CropRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type CropRecordScalarWhereInput = {
    AND?: CropRecordScalarWhereInput | CropRecordScalarWhereInput[]
    OR?: CropRecordScalarWhereInput[]
    NOT?: CropRecordScalarWhereInput | CropRecordScalarWhereInput[]
    id?: StringFilter<"CropRecord"> | string
    userId?: StringFilter<"CropRecord"> | string
    cropType?: StringFilter<"CropRecord"> | string
    plantingDate?: DateTimeFilter<"CropRecord"> | Date | string
    harvestingDate?: DateTimeNullableFilter<"CropRecord"> | Date | string | null
    notes?: StringNullableFilter<"CropRecord"> | string | null
    createdAt?: DateTimeFilter<"CropRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CropRecord"> | Date | string
  }

  export type UserCreateWithoutRecordsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    region: string
    phone: string
    profilePicture?: string | null
    bio?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRecordsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    region: string
    phone: string
    profilePicture?: string | null
    bio?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
  }

  export type ExpenseCreateWithoutCropRecordInput = {
    id?: string
    item: string
    cost: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseUncheckedCreateWithoutCropRecordInput = {
    id?: string
    item: string
    cost: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutCropRecordInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCropRecordInput, ExpenseUncheckedCreateWithoutCropRecordInput>
  }

  export type ExpenseCreateManyCropRecordInputEnvelope = {
    data: ExpenseCreateManyCropRecordInput | ExpenseCreateManyCropRecordInput[]
    skipDuplicates?: boolean
  }

  export type YieldCreateWithoutCropRecordInput = {
    id?: string
    quantity: number
    unit: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YieldUncheckedCreateWithoutCropRecordInput = {
    id?: string
    quantity: number
    unit: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YieldCreateOrConnectWithoutCropRecordInput = {
    where: YieldWhereUniqueInput
    create: XOR<YieldCreateWithoutCropRecordInput, YieldUncheckedCreateWithoutCropRecordInput>
  }

  export type YieldCreateManyCropRecordInputEnvelope = {
    data: YieldCreateManyCropRecordInput | YieldCreateManyCropRecordInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRecordsInput = {
    update: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    region?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    region?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCropRecordInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCropRecordInput, ExpenseUncheckedUpdateWithoutCropRecordInput>
    create: XOR<ExpenseCreateWithoutCropRecordInput, ExpenseUncheckedCreateWithoutCropRecordInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCropRecordInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCropRecordInput, ExpenseUncheckedUpdateWithoutCropRecordInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCropRecordInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCropRecordInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    cropRecordId?: StringFilter<"Expense"> | string
    item?: StringFilter<"Expense"> | string
    cost?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type YieldUpsertWithWhereUniqueWithoutCropRecordInput = {
    where: YieldWhereUniqueInput
    update: XOR<YieldUpdateWithoutCropRecordInput, YieldUncheckedUpdateWithoutCropRecordInput>
    create: XOR<YieldCreateWithoutCropRecordInput, YieldUncheckedCreateWithoutCropRecordInput>
  }

  export type YieldUpdateWithWhereUniqueWithoutCropRecordInput = {
    where: YieldWhereUniqueInput
    data: XOR<YieldUpdateWithoutCropRecordInput, YieldUncheckedUpdateWithoutCropRecordInput>
  }

  export type YieldUpdateManyWithWhereWithoutCropRecordInput = {
    where: YieldScalarWhereInput
    data: XOR<YieldUpdateManyMutationInput, YieldUncheckedUpdateManyWithoutCropRecordInput>
  }

  export type YieldScalarWhereInput = {
    AND?: YieldScalarWhereInput | YieldScalarWhereInput[]
    OR?: YieldScalarWhereInput[]
    NOT?: YieldScalarWhereInput | YieldScalarWhereInput[]
    id?: StringFilter<"Yield"> | string
    cropRecordId?: StringFilter<"Yield"> | string
    quantity?: FloatFilter<"Yield"> | number
    unit?: StringFilter<"Yield"> | string
    date?: DateTimeFilter<"Yield"> | Date | string
    createdAt?: DateTimeFilter<"Yield"> | Date | string
    updatedAt?: DateTimeFilter<"Yield"> | Date | string
  }

  export type CropRecordCreateWithoutExpensesInput = {
    id?: string
    cropType: string
    plantingDate: Date | string
    harvestingDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecordsInput
    yields?: YieldCreateNestedManyWithoutCropRecordInput
  }

  export type CropRecordUncheckedCreateWithoutExpensesInput = {
    id?: string
    userId: string
    cropType: string
    plantingDate: Date | string
    harvestingDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    yields?: YieldUncheckedCreateNestedManyWithoutCropRecordInput
  }

  export type CropRecordCreateOrConnectWithoutExpensesInput = {
    where: CropRecordWhereUniqueInput
    create: XOR<CropRecordCreateWithoutExpensesInput, CropRecordUncheckedCreateWithoutExpensesInput>
  }

  export type CropRecordUpsertWithoutExpensesInput = {
    update: XOR<CropRecordUpdateWithoutExpensesInput, CropRecordUncheckedUpdateWithoutExpensesInput>
    create: XOR<CropRecordCreateWithoutExpensesInput, CropRecordUncheckedCreateWithoutExpensesInput>
    where?: CropRecordWhereInput
  }

  export type CropRecordUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CropRecordWhereInput
    data: XOR<CropRecordUpdateWithoutExpensesInput, CropRecordUncheckedUpdateWithoutExpensesInput>
  }

  export type CropRecordUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
    yields?: YieldUpdateManyWithoutCropRecordNestedInput
  }

  export type CropRecordUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yields?: YieldUncheckedUpdateManyWithoutCropRecordNestedInput
  }

  export type CropRecordCreateWithoutYieldsInput = {
    id?: string
    cropType: string
    plantingDate: Date | string
    harvestingDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecordsInput
    expenses?: ExpenseCreateNestedManyWithoutCropRecordInput
  }

  export type CropRecordUncheckedCreateWithoutYieldsInput = {
    id?: string
    userId: string
    cropType: string
    plantingDate: Date | string
    harvestingDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCropRecordInput
  }

  export type CropRecordCreateOrConnectWithoutYieldsInput = {
    where: CropRecordWhereUniqueInput
    create: XOR<CropRecordCreateWithoutYieldsInput, CropRecordUncheckedCreateWithoutYieldsInput>
  }

  export type CropRecordUpsertWithoutYieldsInput = {
    update: XOR<CropRecordUpdateWithoutYieldsInput, CropRecordUncheckedUpdateWithoutYieldsInput>
    create: XOR<CropRecordCreateWithoutYieldsInput, CropRecordUncheckedCreateWithoutYieldsInput>
    where?: CropRecordWhereInput
  }

  export type CropRecordUpdateToOneWithWhereWithoutYieldsInput = {
    where?: CropRecordWhereInput
    data: XOR<CropRecordUpdateWithoutYieldsInput, CropRecordUncheckedUpdateWithoutYieldsInput>
  }

  export type CropRecordUpdateWithoutYieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
    expenses?: ExpenseUpdateManyWithoutCropRecordNestedInput
  }

  export type CropRecordUncheckedUpdateWithoutYieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutCropRecordNestedInput
  }

  export type CropRecordCreateManyUserInput = {
    id?: string
    cropType: string
    plantingDate: Date | string
    harvestingDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CropRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUpdateManyWithoutCropRecordNestedInput
    yields?: YieldUpdateManyWithoutCropRecordNestedInput
  }

  export type CropRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutCropRecordNestedInput
    yields?: YieldUncheckedUpdateManyWithoutCropRecordNestedInput
  }

  export type CropRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropType?: StringFieldUpdateOperationsInput | string
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyCropRecordInput = {
    id?: string
    item: string
    cost: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YieldCreateManyCropRecordInput = {
    id?: string
    quantity: number
    unit: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseUpdateWithoutCropRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateWithoutCropRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutCropRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldUpdateWithoutCropRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldUncheckedUpdateWithoutCropRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldUncheckedUpdateManyWithoutCropRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}