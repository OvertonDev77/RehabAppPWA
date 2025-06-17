
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model Rehab
 * 
 */
export type Rehab = $Result.DefaultSelection<Prisma.$RehabPayload>
/**
 * Model Amenity
 * 
 */
export type Amenity = $Result.DefaultSelection<Prisma.$AmenityPayload>
/**
 * Model LevelOfCare
 * 
 */
export type LevelOfCare = $Result.DefaultSelection<Prisma.$LevelOfCarePayload>
/**
 * Model Condition
 * 
 */
export type Condition = $Result.DefaultSelection<Prisma.$ConditionPayload>
/**
 * Model Treatment
 * 
 */
export type Treatment = $Result.DefaultSelection<Prisma.$TreatmentPayload>
/**
 * Model InsuranceProvider
 * 
 */
export type InsuranceProvider = $Result.DefaultSelection<Prisma.$InsuranceProviderPayload>
/**
 * Model Clientele
 * 
 */
export type Clientele = $Result.DefaultSelection<Prisma.$ClientelePayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>
/**
 * Model Approach
 * 
 */
export type Approach = $Result.DefaultSelection<Prisma.$ApproachPayload>
/**
 * Model PriceRange
 * 
 */
export type PriceRange = $Result.DefaultSelection<Prisma.$PriceRangePayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model NPIRehabs
 * 
 */
export type NPIRehabs = $Result.DefaultSelection<Prisma.$NPIRehabsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.rehab`: Exposes CRUD operations for the **Rehab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rehabs
    * const rehabs = await prisma.rehab.findMany()
    * ```
    */
  get rehab(): Prisma.RehabDelegate<ExtArgs>;

  /**
   * `prisma.amenity`: Exposes CRUD operations for the **Amenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenity.findMany()
    * ```
    */
  get amenity(): Prisma.AmenityDelegate<ExtArgs>;

  /**
   * `prisma.levelOfCare`: Exposes CRUD operations for the **LevelOfCare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LevelOfCares
    * const levelOfCares = await prisma.levelOfCare.findMany()
    * ```
    */
  get levelOfCare(): Prisma.LevelOfCareDelegate<ExtArgs>;

  /**
   * `prisma.condition`: Exposes CRUD operations for the **Condition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conditions
    * const conditions = await prisma.condition.findMany()
    * ```
    */
  get condition(): Prisma.ConditionDelegate<ExtArgs>;

  /**
   * `prisma.treatment`: Exposes CRUD operations for the **Treatment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Treatments
    * const treatments = await prisma.treatment.findMany()
    * ```
    */
  get treatment(): Prisma.TreatmentDelegate<ExtArgs>;

  /**
   * `prisma.insuranceProvider`: Exposes CRUD operations for the **InsuranceProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InsuranceProviders
    * const insuranceProviders = await prisma.insuranceProvider.findMany()
    * ```
    */
  get insuranceProvider(): Prisma.InsuranceProviderDelegate<ExtArgs>;

  /**
   * `prisma.clientele`: Exposes CRUD operations for the **Clientele** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clienteles
    * const clienteles = await prisma.clientele.findMany()
    * ```
    */
  get clientele(): Prisma.ClienteleDelegate<ExtArgs>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs>;

  /**
   * `prisma.approach`: Exposes CRUD operations for the **Approach** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Approaches
    * const approaches = await prisma.approach.findMany()
    * ```
    */
  get approach(): Prisma.ApproachDelegate<ExtArgs>;

  /**
   * `prisma.priceRange`: Exposes CRUD operations for the **PriceRange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceRanges
    * const priceRanges = await prisma.priceRange.findMany()
    * ```
    */
  get priceRange(): Prisma.PriceRangeDelegate<ExtArgs>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.nPIRehabs`: Exposes CRUD operations for the **NPIRehabs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NPIRehabs
    * const nPIRehabs = await prisma.nPIRehabs.findMany()
    * ```
    */
  get nPIRehabs(): Prisma.NPIRehabsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    users: 'users',
    Rehab: 'Rehab',
    Amenity: 'Amenity',
    LevelOfCare: 'LevelOfCare',
    Condition: 'Condition',
    Treatment: 'Treatment',
    InsuranceProvider: 'InsuranceProvider',
    Clientele: 'Clientele',
    Setting: 'Setting',
    Approach: 'Approach',
    PriceRange: 'PriceRange',
    Country: 'Country',
    State: 'State',
    Review: 'Review',
    NPIRehabs: 'NPIRehabs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "rehab" | "amenity" | "levelOfCare" | "condition" | "treatment" | "insuranceProvider" | "clientele" | "setting" | "approach" | "priceRange" | "country" | "state" | "review" | "nPIRehabs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Rehab: {
        payload: Prisma.$RehabPayload<ExtArgs>
        fields: Prisma.RehabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RehabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RehabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabPayload>
          }
          findFirst: {
            args: Prisma.RehabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RehabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabPayload>
          }
          findMany: {
            args: Prisma.RehabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabPayload>[]
          }
          create: {
            args: Prisma.RehabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabPayload>
          }
          createMany: {
            args: Prisma.RehabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RehabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabPayload>[]
          }
          delete: {
            args: Prisma.RehabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabPayload>
          }
          update: {
            args: Prisma.RehabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabPayload>
          }
          deleteMany: {
            args: Prisma.RehabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RehabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RehabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabPayload>
          }
          aggregate: {
            args: Prisma.RehabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRehab>
          }
          groupBy: {
            args: Prisma.RehabGroupByArgs<ExtArgs>
            result: $Utils.Optional<RehabGroupByOutputType>[]
          }
          count: {
            args: Prisma.RehabCountArgs<ExtArgs>
            result: $Utils.Optional<RehabCountAggregateOutputType> | number
          }
        }
      }
      Amenity: {
        payload: Prisma.$AmenityPayload<ExtArgs>
        fields: Prisma.AmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findFirst: {
            args: Prisma.AmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findMany: {
            args: Prisma.AmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          create: {
            args: Prisma.AmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          createMany: {
            args: Prisma.AmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          delete: {
            args: Prisma.AmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          update: {
            args: Prisma.AmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          deleteMany: {
            args: Prisma.AmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          aggregate: {
            args: Prisma.AmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenity>
          }
          groupBy: {
            args: Prisma.AmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenityCountArgs<ExtArgs>
            result: $Utils.Optional<AmenityCountAggregateOutputType> | number
          }
        }
      }
      LevelOfCare: {
        payload: Prisma.$LevelOfCarePayload<ExtArgs>
        fields: Prisma.LevelOfCareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelOfCareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelOfCarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelOfCareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelOfCarePayload>
          }
          findFirst: {
            args: Prisma.LevelOfCareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelOfCarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelOfCareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelOfCarePayload>
          }
          findMany: {
            args: Prisma.LevelOfCareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelOfCarePayload>[]
          }
          create: {
            args: Prisma.LevelOfCareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelOfCarePayload>
          }
          createMany: {
            args: Prisma.LevelOfCareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelOfCareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelOfCarePayload>[]
          }
          delete: {
            args: Prisma.LevelOfCareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelOfCarePayload>
          }
          update: {
            args: Prisma.LevelOfCareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelOfCarePayload>
          }
          deleteMany: {
            args: Prisma.LevelOfCareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelOfCareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LevelOfCareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelOfCarePayload>
          }
          aggregate: {
            args: Prisma.LevelOfCareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevelOfCare>
          }
          groupBy: {
            args: Prisma.LevelOfCareGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelOfCareGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelOfCareCountArgs<ExtArgs>
            result: $Utils.Optional<LevelOfCareCountAggregateOutputType> | number
          }
        }
      }
      Condition: {
        payload: Prisma.$ConditionPayload<ExtArgs>
        fields: Prisma.ConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          findFirst: {
            args: Prisma.ConditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          findMany: {
            args: Prisma.ConditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>[]
          }
          create: {
            args: Prisma.ConditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          createMany: {
            args: Prisma.ConditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>[]
          }
          delete: {
            args: Prisma.ConditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          update: {
            args: Prisma.ConditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          deleteMany: {
            args: Prisma.ConditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          aggregate: {
            args: Prisma.ConditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCondition>
          }
          groupBy: {
            args: Prisma.ConditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConditionCountArgs<ExtArgs>
            result: $Utils.Optional<ConditionCountAggregateOutputType> | number
          }
        }
      }
      Treatment: {
        payload: Prisma.$TreatmentPayload<ExtArgs>
        fields: Prisma.TreatmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          findFirst: {
            args: Prisma.TreatmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          findMany: {
            args: Prisma.TreatmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>[]
          }
          create: {
            args: Prisma.TreatmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          createMany: {
            args: Prisma.TreatmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreatmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>[]
          }
          delete: {
            args: Prisma.TreatmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          update: {
            args: Prisma.TreatmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          deleteMany: {
            args: Prisma.TreatmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreatmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          aggregate: {
            args: Prisma.TreatmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatment>
          }
          groupBy: {
            args: Prisma.TreatmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentCountAggregateOutputType> | number
          }
        }
      }
      InsuranceProvider: {
        payload: Prisma.$InsuranceProviderPayload<ExtArgs>
        fields: Prisma.InsuranceProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsuranceProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuranceProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsuranceProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuranceProviderPayload>
          }
          findFirst: {
            args: Prisma.InsuranceProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuranceProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsuranceProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuranceProviderPayload>
          }
          findMany: {
            args: Prisma.InsuranceProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuranceProviderPayload>[]
          }
          create: {
            args: Prisma.InsuranceProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuranceProviderPayload>
          }
          createMany: {
            args: Prisma.InsuranceProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsuranceProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuranceProviderPayload>[]
          }
          delete: {
            args: Prisma.InsuranceProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuranceProviderPayload>
          }
          update: {
            args: Prisma.InsuranceProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuranceProviderPayload>
          }
          deleteMany: {
            args: Prisma.InsuranceProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsuranceProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InsuranceProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuranceProviderPayload>
          }
          aggregate: {
            args: Prisma.InsuranceProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsuranceProvider>
          }
          groupBy: {
            args: Prisma.InsuranceProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsuranceProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsuranceProviderCountArgs<ExtArgs>
            result: $Utils.Optional<InsuranceProviderCountAggregateOutputType> | number
          }
        }
      }
      Clientele: {
        payload: Prisma.$ClientelePayload<ExtArgs>
        fields: Prisma.ClienteleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientelePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientelePayload>
          }
          findFirst: {
            args: Prisma.ClienteleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientelePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientelePayload>
          }
          findMany: {
            args: Prisma.ClienteleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientelePayload>[]
          }
          create: {
            args: Prisma.ClienteleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientelePayload>
          }
          createMany: {
            args: Prisma.ClienteleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientelePayload>[]
          }
          delete: {
            args: Prisma.ClienteleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientelePayload>
          }
          update: {
            args: Prisma.ClienteleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientelePayload>
          }
          deleteMany: {
            args: Prisma.ClienteleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientelePayload>
          }
          aggregate: {
            args: Prisma.ClienteleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientele>
          }
          groupBy: {
            args: Prisma.ClienteleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteleCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteleCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      Approach: {
        payload: Prisma.$ApproachPayload<ExtArgs>
        fields: Prisma.ApproachFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApproachFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApproachPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApproachFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApproachPayload>
          }
          findFirst: {
            args: Prisma.ApproachFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApproachPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApproachFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApproachPayload>
          }
          findMany: {
            args: Prisma.ApproachFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApproachPayload>[]
          }
          create: {
            args: Prisma.ApproachCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApproachPayload>
          }
          createMany: {
            args: Prisma.ApproachCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApproachCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApproachPayload>[]
          }
          delete: {
            args: Prisma.ApproachDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApproachPayload>
          }
          update: {
            args: Prisma.ApproachUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApproachPayload>
          }
          deleteMany: {
            args: Prisma.ApproachDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApproachUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApproachUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApproachPayload>
          }
          aggregate: {
            args: Prisma.ApproachAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApproach>
          }
          groupBy: {
            args: Prisma.ApproachGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApproachGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApproachCountArgs<ExtArgs>
            result: $Utils.Optional<ApproachCountAggregateOutputType> | number
          }
        }
      }
      PriceRange: {
        payload: Prisma.$PriceRangePayload<ExtArgs>
        fields: Prisma.PriceRangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceRangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceRangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          findFirst: {
            args: Prisma.PriceRangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceRangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          findMany: {
            args: Prisma.PriceRangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>[]
          }
          create: {
            args: Prisma.PriceRangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          createMany: {
            args: Prisma.PriceRangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceRangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>[]
          }
          delete: {
            args: Prisma.PriceRangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          update: {
            args: Prisma.PriceRangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          deleteMany: {
            args: Prisma.PriceRangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceRangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceRangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          aggregate: {
            args: Prisma.PriceRangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceRange>
          }
          groupBy: {
            args: Prisma.PriceRangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceRangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceRangeCountArgs<ExtArgs>
            result: $Utils.Optional<PriceRangeCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      NPIRehabs: {
        payload: Prisma.$NPIRehabsPayload<ExtArgs>
        fields: Prisma.NPIRehabsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NPIRehabsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPIRehabsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NPIRehabsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPIRehabsPayload>
          }
          findFirst: {
            args: Prisma.NPIRehabsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPIRehabsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NPIRehabsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPIRehabsPayload>
          }
          findMany: {
            args: Prisma.NPIRehabsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPIRehabsPayload>[]
          }
          create: {
            args: Prisma.NPIRehabsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPIRehabsPayload>
          }
          createMany: {
            args: Prisma.NPIRehabsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NPIRehabsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPIRehabsPayload>[]
          }
          delete: {
            args: Prisma.NPIRehabsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPIRehabsPayload>
          }
          update: {
            args: Prisma.NPIRehabsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPIRehabsPayload>
          }
          deleteMany: {
            args: Prisma.NPIRehabsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NPIRehabsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NPIRehabsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPIRehabsPayload>
          }
          aggregate: {
            args: Prisma.NPIRehabsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNPIRehabs>
          }
          groupBy: {
            args: Prisma.NPIRehabsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NPIRehabsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NPIRehabsCountArgs<ExtArgs>
            result: $Utils.Optional<NPIRehabsCountAggregateOutputType> | number
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    rehabs: number
    reviews: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | UsersCountOutputTypeCountRehabsArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type RehabCountOutputType
   */

  export type RehabCountOutputType = {
    reviews: number
    amenities: number
    approaches: number
    clientele: number
    conditions: number
    countries: number
    insuranceProviders: number
    levels_of_care: number
    priceRanges: number
    settings: number
    states: number
    treatments: number
  }

  export type RehabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | RehabCountOutputTypeCountReviewsArgs
    amenities?: boolean | RehabCountOutputTypeCountAmenitiesArgs
    approaches?: boolean | RehabCountOutputTypeCountApproachesArgs
    clientele?: boolean | RehabCountOutputTypeCountClienteleArgs
    conditions?: boolean | RehabCountOutputTypeCountConditionsArgs
    countries?: boolean | RehabCountOutputTypeCountCountriesArgs
    insuranceProviders?: boolean | RehabCountOutputTypeCountInsuranceProvidersArgs
    levels_of_care?: boolean | RehabCountOutputTypeCountLevels_of_careArgs
    priceRanges?: boolean | RehabCountOutputTypeCountPriceRangesArgs
    settings?: boolean | RehabCountOutputTypeCountSettingsArgs
    states?: boolean | RehabCountOutputTypeCountStatesArgs
    treatments?: boolean | RehabCountOutputTypeCountTreatmentsArgs
  }

  // Custom InputTypes
  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RehabCountOutputType
     */
    select?: RehabCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountApproachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApproachWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountClienteleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteleWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountConditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConditionWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountInsuranceProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsuranceProviderWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountLevels_of_careArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelOfCareWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountPriceRangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceRangeWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
  }

  /**
   * RehabCountOutputType without action
   */
  export type RehabCountOutputTypeCountTreatmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentWhereInput
  }


  /**
   * Count Type AmenityCountOutputType
   */

  export type AmenityCountOutputType = {
    rehabs: number
  }

  export type AmenityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | AmenityCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityCountOutputType
     */
    select?: AmenityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Count Type LevelOfCareCountOutputType
   */

  export type LevelOfCareCountOutputType = {
    rehabs: number
  }

  export type LevelOfCareCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | LevelOfCareCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * LevelOfCareCountOutputType without action
   */
  export type LevelOfCareCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCareCountOutputType
     */
    select?: LevelOfCareCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LevelOfCareCountOutputType without action
   */
  export type LevelOfCareCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Count Type ConditionCountOutputType
   */

  export type ConditionCountOutputType = {
    rehabs: number
  }

  export type ConditionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | ConditionCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * ConditionCountOutputType without action
   */
  export type ConditionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionCountOutputType
     */
    select?: ConditionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConditionCountOutputType without action
   */
  export type ConditionCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Count Type TreatmentCountOutputType
   */

  export type TreatmentCountOutputType = {
    rehabs: number
  }

  export type TreatmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | TreatmentCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * TreatmentCountOutputType without action
   */
  export type TreatmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCountOutputType
     */
    select?: TreatmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreatmentCountOutputType without action
   */
  export type TreatmentCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Count Type InsuranceProviderCountOutputType
   */

  export type InsuranceProviderCountOutputType = {
    rehabs: number
  }

  export type InsuranceProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | InsuranceProviderCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * InsuranceProviderCountOutputType without action
   */
  export type InsuranceProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProviderCountOutputType
     */
    select?: InsuranceProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InsuranceProviderCountOutputType without action
   */
  export type InsuranceProviderCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Count Type ClienteleCountOutputType
   */

  export type ClienteleCountOutputType = {
    rehabs: number
  }

  export type ClienteleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | ClienteleCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * ClienteleCountOutputType without action
   */
  export type ClienteleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteleCountOutputType
     */
    select?: ClienteleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteleCountOutputType without action
   */
  export type ClienteleCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Count Type SettingCountOutputType
   */

  export type SettingCountOutputType = {
    rehabs: number
  }

  export type SettingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | SettingCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * SettingCountOutputType without action
   */
  export type SettingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingCountOutputType
     */
    select?: SettingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SettingCountOutputType without action
   */
  export type SettingCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Count Type ApproachCountOutputType
   */

  export type ApproachCountOutputType = {
    rehabs: number
  }

  export type ApproachCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | ApproachCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * ApproachCountOutputType without action
   */
  export type ApproachCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproachCountOutputType
     */
    select?: ApproachCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApproachCountOutputType without action
   */
  export type ApproachCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Count Type PriceRangeCountOutputType
   */

  export type PriceRangeCountOutputType = {
    rehabs: number
  }

  export type PriceRangeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | PriceRangeCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * PriceRangeCountOutputType without action
   */
  export type PriceRangeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRangeCountOutputType
     */
    select?: PriceRangeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PriceRangeCountOutputType without action
   */
  export type PriceRangeCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    rehabs: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | CountryCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    rehabs: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | StateCountOutputTypeCountRehabsArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | users$rehabsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | users$rehabsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends users$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, users$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.rehabs
   */
  export type users$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * users.reviews
   */
  export type users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model Rehab
   */

  export type AggregateRehab = {
    _count: RehabCountAggregateOutputType | null
    _avg: RehabAvgAggregateOutputType | null
    _sum: RehabSumAggregateOutputType | null
    _min: RehabMinAggregateOutputType | null
    _max: RehabMaxAggregateOutputType | null
  }

  export type RehabAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RehabSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RehabMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    description: string | null
    phone: string | null
    last_updated_nppes: Date | null
    website: string | null
    userId: number | null
  }

  export type RehabMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    description: string | null
    phone: string | null
    last_updated_nppes: Date | null
    website: string | null
    userId: number | null
  }

  export type RehabCountAggregateOutputType = {
    id: number
    name: number
    address: number
    description: number
    phone: number
    last_updated_nppes: number
    website: number
    userId: number
    _all: number
  }


  export type RehabAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RehabSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RehabMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    phone?: true
    last_updated_nppes?: true
    website?: true
    userId?: true
  }

  export type RehabMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    phone?: true
    last_updated_nppes?: true
    website?: true
    userId?: true
  }

  export type RehabCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    phone?: true
    last_updated_nppes?: true
    website?: true
    userId?: true
    _all?: true
  }

  export type RehabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rehab to aggregate.
     */
    where?: RehabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehabs to fetch.
     */
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RehabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rehabs
    **/
    _count?: true | RehabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RehabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RehabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RehabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RehabMaxAggregateInputType
  }

  export type GetRehabAggregateType<T extends RehabAggregateArgs> = {
        [P in keyof T & keyof AggregateRehab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRehab[P]>
      : GetScalarType<T[P], AggregateRehab[P]>
  }




  export type RehabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithAggregationInput | RehabOrderByWithAggregationInput[]
    by: RehabScalarFieldEnum[] | RehabScalarFieldEnum
    having?: RehabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RehabCountAggregateInputType | true
    _avg?: RehabAvgAggregateInputType
    _sum?: RehabSumAggregateInputType
    _min?: RehabMinAggregateInputType
    _max?: RehabMaxAggregateInputType
  }

  export type RehabGroupByOutputType = {
    id: number
    name: string
    address: string | null
    description: string | null
    phone: string | null
    last_updated_nppes: Date | null
    website: string | null
    userId: number | null
    _count: RehabCountAggregateOutputType | null
    _avg: RehabAvgAggregateOutputType | null
    _sum: RehabSumAggregateOutputType | null
    _min: RehabMinAggregateOutputType | null
    _max: RehabMaxAggregateOutputType | null
  }

  type GetRehabGroupByPayload<T extends RehabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RehabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RehabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RehabGroupByOutputType[P]>
            : GetScalarType<T[P], RehabGroupByOutputType[P]>
        }
      >
    >


  export type RehabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    phone?: boolean
    last_updated_nppes?: boolean
    website?: boolean
    userId?: boolean
    user?: boolean | Rehab$userArgs<ExtArgs>
    reviews?: boolean | Rehab$reviewsArgs<ExtArgs>
    amenities?: boolean | Rehab$amenitiesArgs<ExtArgs>
    approaches?: boolean | Rehab$approachesArgs<ExtArgs>
    clientele?: boolean | Rehab$clienteleArgs<ExtArgs>
    conditions?: boolean | Rehab$conditionsArgs<ExtArgs>
    countries?: boolean | Rehab$countriesArgs<ExtArgs>
    insuranceProviders?: boolean | Rehab$insuranceProvidersArgs<ExtArgs>
    levels_of_care?: boolean | Rehab$levels_of_careArgs<ExtArgs>
    priceRanges?: boolean | Rehab$priceRangesArgs<ExtArgs>
    settings?: boolean | Rehab$settingsArgs<ExtArgs>
    states?: boolean | Rehab$statesArgs<ExtArgs>
    treatments?: boolean | Rehab$treatmentsArgs<ExtArgs>
    _count?: boolean | RehabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rehab"]>

  export type RehabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    phone?: boolean
    last_updated_nppes?: boolean
    website?: boolean
    userId?: boolean
    user?: boolean | Rehab$userArgs<ExtArgs>
  }, ExtArgs["result"]["rehab"]>

  export type RehabSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    phone?: boolean
    last_updated_nppes?: boolean
    website?: boolean
    userId?: boolean
  }

  export type RehabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Rehab$userArgs<ExtArgs>
    reviews?: boolean | Rehab$reviewsArgs<ExtArgs>
    amenities?: boolean | Rehab$amenitiesArgs<ExtArgs>
    approaches?: boolean | Rehab$approachesArgs<ExtArgs>
    clientele?: boolean | Rehab$clienteleArgs<ExtArgs>
    conditions?: boolean | Rehab$conditionsArgs<ExtArgs>
    countries?: boolean | Rehab$countriesArgs<ExtArgs>
    insuranceProviders?: boolean | Rehab$insuranceProvidersArgs<ExtArgs>
    levels_of_care?: boolean | Rehab$levels_of_careArgs<ExtArgs>
    priceRanges?: boolean | Rehab$priceRangesArgs<ExtArgs>
    settings?: boolean | Rehab$settingsArgs<ExtArgs>
    states?: boolean | Rehab$statesArgs<ExtArgs>
    treatments?: boolean | Rehab$treatmentsArgs<ExtArgs>
    _count?: boolean | RehabCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RehabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Rehab$userArgs<ExtArgs>
  }

  export type $RehabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rehab"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      amenities: Prisma.$AmenityPayload<ExtArgs>[]
      approaches: Prisma.$ApproachPayload<ExtArgs>[]
      clientele: Prisma.$ClientelePayload<ExtArgs>[]
      conditions: Prisma.$ConditionPayload<ExtArgs>[]
      countries: Prisma.$CountryPayload<ExtArgs>[]
      insuranceProviders: Prisma.$InsuranceProviderPayload<ExtArgs>[]
      levels_of_care: Prisma.$LevelOfCarePayload<ExtArgs>[]
      priceRanges: Prisma.$PriceRangePayload<ExtArgs>[]
      settings: Prisma.$SettingPayload<ExtArgs>[]
      states: Prisma.$StatePayload<ExtArgs>[]
      treatments: Prisma.$TreatmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      description: string | null
      phone: string | null
      last_updated_nppes: Date | null
      website: string | null
      userId: number | null
    }, ExtArgs["result"]["rehab"]>
    composites: {}
  }

  type RehabGetPayload<S extends boolean | null | undefined | RehabDefaultArgs> = $Result.GetResult<Prisma.$RehabPayload, S>

  type RehabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RehabFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RehabCountAggregateInputType | true
    }

  export interface RehabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rehab'], meta: { name: 'Rehab' } }
    /**
     * Find zero or one Rehab that matches the filter.
     * @param {RehabFindUniqueArgs} args - Arguments to find a Rehab
     * @example
     * // Get one Rehab
     * const rehab = await prisma.rehab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RehabFindUniqueArgs>(args: SelectSubset<T, RehabFindUniqueArgs<ExtArgs>>): Prisma__RehabClient<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rehab that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RehabFindUniqueOrThrowArgs} args - Arguments to find a Rehab
     * @example
     * // Get one Rehab
     * const rehab = await prisma.rehab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RehabFindUniqueOrThrowArgs>(args: SelectSubset<T, RehabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RehabClient<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rehab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabFindFirstArgs} args - Arguments to find a Rehab
     * @example
     * // Get one Rehab
     * const rehab = await prisma.rehab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RehabFindFirstArgs>(args?: SelectSubset<T, RehabFindFirstArgs<ExtArgs>>): Prisma__RehabClient<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rehab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabFindFirstOrThrowArgs} args - Arguments to find a Rehab
     * @example
     * // Get one Rehab
     * const rehab = await prisma.rehab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RehabFindFirstOrThrowArgs>(args?: SelectSubset<T, RehabFindFirstOrThrowArgs<ExtArgs>>): Prisma__RehabClient<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rehabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rehabs
     * const rehabs = await prisma.rehab.findMany()
     * 
     * // Get first 10 Rehabs
     * const rehabs = await prisma.rehab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rehabWithIdOnly = await prisma.rehab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RehabFindManyArgs>(args?: SelectSubset<T, RehabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rehab.
     * @param {RehabCreateArgs} args - Arguments to create a Rehab.
     * @example
     * // Create one Rehab
     * const Rehab = await prisma.rehab.create({
     *   data: {
     *     // ... data to create a Rehab
     *   }
     * })
     * 
     */
    create<T extends RehabCreateArgs>(args: SelectSubset<T, RehabCreateArgs<ExtArgs>>): Prisma__RehabClient<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rehabs.
     * @param {RehabCreateManyArgs} args - Arguments to create many Rehabs.
     * @example
     * // Create many Rehabs
     * const rehab = await prisma.rehab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RehabCreateManyArgs>(args?: SelectSubset<T, RehabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rehabs and returns the data saved in the database.
     * @param {RehabCreateManyAndReturnArgs} args - Arguments to create many Rehabs.
     * @example
     * // Create many Rehabs
     * const rehab = await prisma.rehab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rehabs and only return the `id`
     * const rehabWithIdOnly = await prisma.rehab.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RehabCreateManyAndReturnArgs>(args?: SelectSubset<T, RehabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Rehab.
     * @param {RehabDeleteArgs} args - Arguments to delete one Rehab.
     * @example
     * // Delete one Rehab
     * const Rehab = await prisma.rehab.delete({
     *   where: {
     *     // ... filter to delete one Rehab
     *   }
     * })
     * 
     */
    delete<T extends RehabDeleteArgs>(args: SelectSubset<T, RehabDeleteArgs<ExtArgs>>): Prisma__RehabClient<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rehab.
     * @param {RehabUpdateArgs} args - Arguments to update one Rehab.
     * @example
     * // Update one Rehab
     * const rehab = await prisma.rehab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RehabUpdateArgs>(args: SelectSubset<T, RehabUpdateArgs<ExtArgs>>): Prisma__RehabClient<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rehabs.
     * @param {RehabDeleteManyArgs} args - Arguments to filter Rehabs to delete.
     * @example
     * // Delete a few Rehabs
     * const { count } = await prisma.rehab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RehabDeleteManyArgs>(args?: SelectSubset<T, RehabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rehabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rehabs
     * const rehab = await prisma.rehab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RehabUpdateManyArgs>(args: SelectSubset<T, RehabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rehab.
     * @param {RehabUpsertArgs} args - Arguments to update or create a Rehab.
     * @example
     * // Update or create a Rehab
     * const rehab = await prisma.rehab.upsert({
     *   create: {
     *     // ... data to create a Rehab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rehab we want to update
     *   }
     * })
     */
    upsert<T extends RehabUpsertArgs>(args: SelectSubset<T, RehabUpsertArgs<ExtArgs>>): Prisma__RehabClient<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rehabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabCountArgs} args - Arguments to filter Rehabs to count.
     * @example
     * // Count the number of Rehabs
     * const count = await prisma.rehab.count({
     *   where: {
     *     // ... the filter for the Rehabs we want to count
     *   }
     * })
    **/
    count<T extends RehabCountArgs>(
      args?: Subset<T, RehabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RehabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rehab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RehabAggregateArgs>(args: Subset<T, RehabAggregateArgs>): Prisma.PrismaPromise<GetRehabAggregateType<T>>

    /**
     * Group by Rehab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabGroupByArgs} args - Group by arguments.
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
      T extends RehabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RehabGroupByArgs['orderBy'] }
        : { orderBy?: RehabGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RehabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRehabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rehab model
   */
  readonly fields: RehabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rehab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RehabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Rehab$userArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    reviews<T extends Rehab$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    amenities<T extends Rehab$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany"> | Null>
    approaches<T extends Rehab$approachesArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$approachesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "findMany"> | Null>
    clientele<T extends Rehab$clienteleArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$clienteleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "findMany"> | Null>
    conditions<T extends Rehab$conditionsArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$conditionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findMany"> | Null>
    countries<T extends Rehab$countriesArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$countriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany"> | Null>
    insuranceProviders<T extends Rehab$insuranceProvidersArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$insuranceProvidersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "findMany"> | Null>
    levels_of_care<T extends Rehab$levels_of_careArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$levels_of_careArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "findMany"> | Null>
    priceRanges<T extends Rehab$priceRangesArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$priceRangesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findMany"> | Null>
    settings<T extends Rehab$settingsArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany"> | Null>
    states<T extends Rehab$statesArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$statesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany"> | Null>
    treatments<T extends Rehab$treatmentsArgs<ExtArgs> = {}>(args?: Subset<T, Rehab$treatmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Rehab model
   */ 
  interface RehabFieldRefs {
    readonly id: FieldRef<"Rehab", 'Int'>
    readonly name: FieldRef<"Rehab", 'String'>
    readonly address: FieldRef<"Rehab", 'String'>
    readonly description: FieldRef<"Rehab", 'String'>
    readonly phone: FieldRef<"Rehab", 'String'>
    readonly last_updated_nppes: FieldRef<"Rehab", 'DateTime'>
    readonly website: FieldRef<"Rehab", 'String'>
    readonly userId: FieldRef<"Rehab", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rehab findUnique
   */
  export type RehabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    /**
     * Filter, which Rehab to fetch.
     */
    where: RehabWhereUniqueInput
  }

  /**
   * Rehab findUniqueOrThrow
   */
  export type RehabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    /**
     * Filter, which Rehab to fetch.
     */
    where: RehabWhereUniqueInput
  }

  /**
   * Rehab findFirst
   */
  export type RehabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    /**
     * Filter, which Rehab to fetch.
     */
    where?: RehabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehabs to fetch.
     */
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rehabs.
     */
    cursor?: RehabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rehabs.
     */
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * Rehab findFirstOrThrow
   */
  export type RehabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    /**
     * Filter, which Rehab to fetch.
     */
    where?: RehabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehabs to fetch.
     */
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rehabs.
     */
    cursor?: RehabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rehabs.
     */
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * Rehab findMany
   */
  export type RehabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    /**
     * Filter, which Rehabs to fetch.
     */
    where?: RehabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehabs to fetch.
     */
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rehabs.
     */
    cursor?: RehabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehabs.
     */
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * Rehab create
   */
  export type RehabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    /**
     * The data needed to create a Rehab.
     */
    data: XOR<RehabCreateInput, RehabUncheckedCreateInput>
  }

  /**
   * Rehab createMany
   */
  export type RehabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rehabs.
     */
    data: RehabCreateManyInput | RehabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rehab createManyAndReturn
   */
  export type RehabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rehabs.
     */
    data: RehabCreateManyInput | RehabCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rehab update
   */
  export type RehabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    /**
     * The data needed to update a Rehab.
     */
    data: XOR<RehabUpdateInput, RehabUncheckedUpdateInput>
    /**
     * Choose, which Rehab to update.
     */
    where: RehabWhereUniqueInput
  }

  /**
   * Rehab updateMany
   */
  export type RehabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rehabs.
     */
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyInput>
    /**
     * Filter which Rehabs to update
     */
    where?: RehabWhereInput
  }

  /**
   * Rehab upsert
   */
  export type RehabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    /**
     * The filter to search for the Rehab to update in case it exists.
     */
    where: RehabWhereUniqueInput
    /**
     * In case the Rehab found by the `where` argument doesn't exist, create a new Rehab with this data.
     */
    create: XOR<RehabCreateInput, RehabUncheckedCreateInput>
    /**
     * In case the Rehab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RehabUpdateInput, RehabUncheckedUpdateInput>
  }

  /**
   * Rehab delete
   */
  export type RehabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    /**
     * Filter which Rehab to delete.
     */
    where: RehabWhereUniqueInput
  }

  /**
   * Rehab deleteMany
   */
  export type RehabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rehabs to delete
     */
    where?: RehabWhereInput
  }

  /**
   * Rehab.user
   */
  export type Rehab$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * Rehab.reviews
   */
  export type Rehab$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Rehab.amenities
   */
  export type Rehab$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    cursor?: AmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Rehab.approaches
   */
  export type Rehab$approachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
    where?: ApproachWhereInput
    orderBy?: ApproachOrderByWithRelationInput | ApproachOrderByWithRelationInput[]
    cursor?: ApproachWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApproachScalarFieldEnum | ApproachScalarFieldEnum[]
  }

  /**
   * Rehab.clientele
   */
  export type Rehab$clienteleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
    where?: ClienteleWhereInput
    orderBy?: ClienteleOrderByWithRelationInput | ClienteleOrderByWithRelationInput[]
    cursor?: ClienteleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteleScalarFieldEnum | ClienteleScalarFieldEnum[]
  }

  /**
   * Rehab.conditions
   */
  export type Rehab$conditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    where?: ConditionWhereInput
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    cursor?: ConditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Rehab.countries
   */
  export type Rehab$countriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Rehab.insuranceProviders
   */
  export type Rehab$insuranceProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
    where?: InsuranceProviderWhereInput
    orderBy?: InsuranceProviderOrderByWithRelationInput | InsuranceProviderOrderByWithRelationInput[]
    cursor?: InsuranceProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsuranceProviderScalarFieldEnum | InsuranceProviderScalarFieldEnum[]
  }

  /**
   * Rehab.levels_of_care
   */
  export type Rehab$levels_of_careArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
    where?: LevelOfCareWhereInput
    orderBy?: LevelOfCareOrderByWithRelationInput | LevelOfCareOrderByWithRelationInput[]
    cursor?: LevelOfCareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LevelOfCareScalarFieldEnum | LevelOfCareScalarFieldEnum[]
  }

  /**
   * Rehab.priceRanges
   */
  export type Rehab$priceRangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
    where?: PriceRangeWhereInput
    orderBy?: PriceRangeOrderByWithRelationInput | PriceRangeOrderByWithRelationInput[]
    cursor?: PriceRangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceRangeScalarFieldEnum | PriceRangeScalarFieldEnum[]
  }

  /**
   * Rehab.settings
   */
  export type Rehab$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    cursor?: SettingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Rehab.states
   */
  export type Rehab$statesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    where?: StateWhereInput
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    cursor?: StateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * Rehab.treatments
   */
  export type Rehab$treatmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    where?: TreatmentWhereInput
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    cursor?: TreatmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Rehab without action
   */
  export type RehabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
  }


  /**
   * Model Amenity
   */

  export type AggregateAmenity = {
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  export type AmenityAvgAggregateOutputType = {
    id: number | null
  }

  export type AmenitySumAggregateOutputType = {
    id: number | null
  }

  export type AmenityMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AmenityMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AmenityCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AmenityAvgAggregateInputType = {
    id?: true
  }

  export type AmenitySumAggregateInputType = {
    id?: true
  }

  export type AmenityMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AmenityMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AmenityCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenity to aggregate.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amenities
    **/
    _count?: true | AmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmenityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmenitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityMaxAggregateInputType
  }

  export type GetAmenityAggregateType<T extends AmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenity[P]>
      : GetScalarType<T[P], AggregateAmenity[P]>
  }




  export type AmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithAggregationInput | AmenityOrderByWithAggregationInput[]
    by: AmenityScalarFieldEnum[] | AmenityScalarFieldEnum
    having?: AmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityCountAggregateInputType | true
    _avg?: AmenityAvgAggregateInputType
    _sum?: AmenitySumAggregateInputType
    _min?: AmenityMinAggregateInputType
    _max?: AmenityMaxAggregateInputType
  }

  export type AmenityGroupByOutputType = {
    id: number
    name: string
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  type GetAmenityGroupByPayload<T extends AmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenityGroupByOutputType[P]>
            : GetScalarType<T[P], AmenityGroupByOutputType[P]>
        }
      >
    >


  export type AmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | Amenity$rehabsArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | Amenity$rehabsArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amenity"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["amenity"]>
    composites: {}
  }

  type AmenityGetPayload<S extends boolean | null | undefined | AmenityDefaultArgs> = $Result.GetResult<Prisma.$AmenityPayload, S>

  type AmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AmenityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AmenityCountAggregateInputType | true
    }

  export interface AmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amenity'], meta: { name: 'Amenity' } }
    /**
     * Find zero or one Amenity that matches the filter.
     * @param {AmenityFindUniqueArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenityFindUniqueArgs>(args: SelectSubset<T, AmenityFindUniqueArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Amenity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AmenityFindUniqueOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Amenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenityFindFirstArgs>(args?: SelectSubset<T, AmenityFindFirstArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Amenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenity.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amenityWithIdOnly = await prisma.amenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmenityFindManyArgs>(args?: SelectSubset<T, AmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Amenity.
     * @param {AmenityCreateArgs} args - Arguments to create a Amenity.
     * @example
     * // Create one Amenity
     * const Amenity = await prisma.amenity.create({
     *   data: {
     *     // ... data to create a Amenity
     *   }
     * })
     * 
     */
    create<T extends AmenityCreateArgs>(args: SelectSubset<T, AmenityCreateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Amenities.
     * @param {AmenityCreateManyArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenityCreateManyArgs>(args?: SelectSubset<T, AmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amenities and returns the data saved in the database.
     * @param {AmenityCreateManyAndReturnArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, AmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Amenity.
     * @param {AmenityDeleteArgs} args - Arguments to delete one Amenity.
     * @example
     * // Delete one Amenity
     * const Amenity = await prisma.amenity.delete({
     *   where: {
     *     // ... filter to delete one Amenity
     *   }
     * })
     * 
     */
    delete<T extends AmenityDeleteArgs>(args: SelectSubset<T, AmenityDeleteArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Amenity.
     * @param {AmenityUpdateArgs} args - Arguments to update one Amenity.
     * @example
     * // Update one Amenity
     * const amenity = await prisma.amenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenityUpdateArgs>(args: SelectSubset<T, AmenityUpdateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Amenities.
     * @param {AmenityDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenityDeleteManyArgs>(args?: SelectSubset<T, AmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenityUpdateManyArgs>(args: SelectSubset<T, AmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Amenity.
     * @param {AmenityUpsertArgs} args - Arguments to update or create a Amenity.
     * @example
     * // Update or create a Amenity
     * const amenity = await prisma.amenity.upsert({
     *   create: {
     *     // ... data to create a Amenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenity we want to update
     *   }
     * })
     */
    upsert<T extends AmenityUpsertArgs>(args: SelectSubset<T, AmenityUpsertArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenity.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends AmenityCountArgs>(
      args?: Subset<T, AmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmenityAggregateArgs>(args: Subset<T, AmenityAggregateArgs>): Prisma.PrismaPromise<GetAmenityAggregateType<T>>

    /**
     * Group by Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityGroupByArgs} args - Group by arguments.
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
      T extends AmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityGroupByArgs['orderBy'] }
        : { orderBy?: AmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amenity model
   */
  readonly fields: AmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends Amenity$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, Amenity$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Amenity model
   */ 
  interface AmenityFieldRefs {
    readonly id: FieldRef<"Amenity", 'Int'>
    readonly name: FieldRef<"Amenity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Amenity findUnique
   */
  export type AmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findUniqueOrThrow
   */
  export type AmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findFirst
   */
  export type AmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findFirstOrThrow
   */
  export type AmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findMany
   */
  export type AmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity create
   */
  export type AmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a Amenity.
     */
    data: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
  }

  /**
   * Amenity createMany
   */
  export type AmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity createManyAndReturn
   */
  export type AmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity update
   */
  export type AmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a Amenity.
     */
    data: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
    /**
     * Choose, which Amenity to update.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity updateMany
   */
  export type AmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
  }

  /**
   * Amenity upsert
   */
  export type AmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the Amenity to update in case it exists.
     */
    where: AmenityWhereUniqueInput
    /**
     * In case the Amenity found by the `where` argument doesn't exist, create a new Amenity with this data.
     */
    create: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
    /**
     * In case the Amenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
  }

  /**
   * Amenity delete
   */
  export type AmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter which Amenity to delete.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity deleteMany
   */
  export type AmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to delete
     */
    where?: AmenityWhereInput
  }

  /**
   * Amenity.rehabs
   */
  export type Amenity$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * Amenity without action
   */
  export type AmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
  }


  /**
   * Model LevelOfCare
   */

  export type AggregateLevelOfCare = {
    _count: LevelOfCareCountAggregateOutputType | null
    _avg: LevelOfCareAvgAggregateOutputType | null
    _sum: LevelOfCareSumAggregateOutputType | null
    _min: LevelOfCareMinAggregateOutputType | null
    _max: LevelOfCareMaxAggregateOutputType | null
  }

  export type LevelOfCareAvgAggregateOutputType = {
    id: number | null
  }

  export type LevelOfCareSumAggregateOutputType = {
    id: number | null
  }

  export type LevelOfCareMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LevelOfCareMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LevelOfCareCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LevelOfCareAvgAggregateInputType = {
    id?: true
  }

  export type LevelOfCareSumAggregateInputType = {
    id?: true
  }

  export type LevelOfCareMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LevelOfCareMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LevelOfCareCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LevelOfCareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelOfCare to aggregate.
     */
    where?: LevelOfCareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelOfCares to fetch.
     */
    orderBy?: LevelOfCareOrderByWithRelationInput | LevelOfCareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelOfCareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelOfCares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelOfCares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LevelOfCares
    **/
    _count?: true | LevelOfCareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelOfCareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelOfCareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelOfCareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelOfCareMaxAggregateInputType
  }

  export type GetLevelOfCareAggregateType<T extends LevelOfCareAggregateArgs> = {
        [P in keyof T & keyof AggregateLevelOfCare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevelOfCare[P]>
      : GetScalarType<T[P], AggregateLevelOfCare[P]>
  }




  export type LevelOfCareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelOfCareWhereInput
    orderBy?: LevelOfCareOrderByWithAggregationInput | LevelOfCareOrderByWithAggregationInput[]
    by: LevelOfCareScalarFieldEnum[] | LevelOfCareScalarFieldEnum
    having?: LevelOfCareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelOfCareCountAggregateInputType | true
    _avg?: LevelOfCareAvgAggregateInputType
    _sum?: LevelOfCareSumAggregateInputType
    _min?: LevelOfCareMinAggregateInputType
    _max?: LevelOfCareMaxAggregateInputType
  }

  export type LevelOfCareGroupByOutputType = {
    id: number
    name: string
    _count: LevelOfCareCountAggregateOutputType | null
    _avg: LevelOfCareAvgAggregateOutputType | null
    _sum: LevelOfCareSumAggregateOutputType | null
    _min: LevelOfCareMinAggregateOutputType | null
    _max: LevelOfCareMaxAggregateOutputType | null
  }

  type GetLevelOfCareGroupByPayload<T extends LevelOfCareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelOfCareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelOfCareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelOfCareGroupByOutputType[P]>
            : GetScalarType<T[P], LevelOfCareGroupByOutputType[P]>
        }
      >
    >


  export type LevelOfCareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | LevelOfCare$rehabsArgs<ExtArgs>
    _count?: boolean | LevelOfCareCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelOfCare"]>

  export type LevelOfCareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["levelOfCare"]>

  export type LevelOfCareSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type LevelOfCareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | LevelOfCare$rehabsArgs<ExtArgs>
    _count?: boolean | LevelOfCareCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LevelOfCareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LevelOfCarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LevelOfCare"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["levelOfCare"]>
    composites: {}
  }

  type LevelOfCareGetPayload<S extends boolean | null | undefined | LevelOfCareDefaultArgs> = $Result.GetResult<Prisma.$LevelOfCarePayload, S>

  type LevelOfCareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LevelOfCareFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LevelOfCareCountAggregateInputType | true
    }

  export interface LevelOfCareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LevelOfCare'], meta: { name: 'LevelOfCare' } }
    /**
     * Find zero or one LevelOfCare that matches the filter.
     * @param {LevelOfCareFindUniqueArgs} args - Arguments to find a LevelOfCare
     * @example
     * // Get one LevelOfCare
     * const levelOfCare = await prisma.levelOfCare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelOfCareFindUniqueArgs>(args: SelectSubset<T, LevelOfCareFindUniqueArgs<ExtArgs>>): Prisma__LevelOfCareClient<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LevelOfCare that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LevelOfCareFindUniqueOrThrowArgs} args - Arguments to find a LevelOfCare
     * @example
     * // Get one LevelOfCare
     * const levelOfCare = await prisma.levelOfCare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelOfCareFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelOfCareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelOfCareClient<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LevelOfCare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelOfCareFindFirstArgs} args - Arguments to find a LevelOfCare
     * @example
     * // Get one LevelOfCare
     * const levelOfCare = await prisma.levelOfCare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelOfCareFindFirstArgs>(args?: SelectSubset<T, LevelOfCareFindFirstArgs<ExtArgs>>): Prisma__LevelOfCareClient<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LevelOfCare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelOfCareFindFirstOrThrowArgs} args - Arguments to find a LevelOfCare
     * @example
     * // Get one LevelOfCare
     * const levelOfCare = await prisma.levelOfCare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelOfCareFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelOfCareFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelOfCareClient<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LevelOfCares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelOfCareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LevelOfCares
     * const levelOfCares = await prisma.levelOfCare.findMany()
     * 
     * // Get first 10 LevelOfCares
     * const levelOfCares = await prisma.levelOfCare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelOfCareWithIdOnly = await prisma.levelOfCare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelOfCareFindManyArgs>(args?: SelectSubset<T, LevelOfCareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LevelOfCare.
     * @param {LevelOfCareCreateArgs} args - Arguments to create a LevelOfCare.
     * @example
     * // Create one LevelOfCare
     * const LevelOfCare = await prisma.levelOfCare.create({
     *   data: {
     *     // ... data to create a LevelOfCare
     *   }
     * })
     * 
     */
    create<T extends LevelOfCareCreateArgs>(args: SelectSubset<T, LevelOfCareCreateArgs<ExtArgs>>): Prisma__LevelOfCareClient<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LevelOfCares.
     * @param {LevelOfCareCreateManyArgs} args - Arguments to create many LevelOfCares.
     * @example
     * // Create many LevelOfCares
     * const levelOfCare = await prisma.levelOfCare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelOfCareCreateManyArgs>(args?: SelectSubset<T, LevelOfCareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LevelOfCares and returns the data saved in the database.
     * @param {LevelOfCareCreateManyAndReturnArgs} args - Arguments to create many LevelOfCares.
     * @example
     * // Create many LevelOfCares
     * const levelOfCare = await prisma.levelOfCare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LevelOfCares and only return the `id`
     * const levelOfCareWithIdOnly = await prisma.levelOfCare.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelOfCareCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelOfCareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LevelOfCare.
     * @param {LevelOfCareDeleteArgs} args - Arguments to delete one LevelOfCare.
     * @example
     * // Delete one LevelOfCare
     * const LevelOfCare = await prisma.levelOfCare.delete({
     *   where: {
     *     // ... filter to delete one LevelOfCare
     *   }
     * })
     * 
     */
    delete<T extends LevelOfCareDeleteArgs>(args: SelectSubset<T, LevelOfCareDeleteArgs<ExtArgs>>): Prisma__LevelOfCareClient<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LevelOfCare.
     * @param {LevelOfCareUpdateArgs} args - Arguments to update one LevelOfCare.
     * @example
     * // Update one LevelOfCare
     * const levelOfCare = await prisma.levelOfCare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelOfCareUpdateArgs>(args: SelectSubset<T, LevelOfCareUpdateArgs<ExtArgs>>): Prisma__LevelOfCareClient<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LevelOfCares.
     * @param {LevelOfCareDeleteManyArgs} args - Arguments to filter LevelOfCares to delete.
     * @example
     * // Delete a few LevelOfCares
     * const { count } = await prisma.levelOfCare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelOfCareDeleteManyArgs>(args?: SelectSubset<T, LevelOfCareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelOfCares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelOfCareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LevelOfCares
     * const levelOfCare = await prisma.levelOfCare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelOfCareUpdateManyArgs>(args: SelectSubset<T, LevelOfCareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LevelOfCare.
     * @param {LevelOfCareUpsertArgs} args - Arguments to update or create a LevelOfCare.
     * @example
     * // Update or create a LevelOfCare
     * const levelOfCare = await prisma.levelOfCare.upsert({
     *   create: {
     *     // ... data to create a LevelOfCare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LevelOfCare we want to update
     *   }
     * })
     */
    upsert<T extends LevelOfCareUpsertArgs>(args: SelectSubset<T, LevelOfCareUpsertArgs<ExtArgs>>): Prisma__LevelOfCareClient<$Result.GetResult<Prisma.$LevelOfCarePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LevelOfCares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelOfCareCountArgs} args - Arguments to filter LevelOfCares to count.
     * @example
     * // Count the number of LevelOfCares
     * const count = await prisma.levelOfCare.count({
     *   where: {
     *     // ... the filter for the LevelOfCares we want to count
     *   }
     * })
    **/
    count<T extends LevelOfCareCountArgs>(
      args?: Subset<T, LevelOfCareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelOfCareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LevelOfCare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelOfCareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelOfCareAggregateArgs>(args: Subset<T, LevelOfCareAggregateArgs>): Prisma.PrismaPromise<GetLevelOfCareAggregateType<T>>

    /**
     * Group by LevelOfCare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelOfCareGroupByArgs} args - Group by arguments.
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
      T extends LevelOfCareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelOfCareGroupByArgs['orderBy'] }
        : { orderBy?: LevelOfCareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LevelOfCareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelOfCareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LevelOfCare model
   */
  readonly fields: LevelOfCareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LevelOfCare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelOfCareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends LevelOfCare$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, LevelOfCare$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the LevelOfCare model
   */ 
  interface LevelOfCareFieldRefs {
    readonly id: FieldRef<"LevelOfCare", 'Int'>
    readonly name: FieldRef<"LevelOfCare", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LevelOfCare findUnique
   */
  export type LevelOfCareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
    /**
     * Filter, which LevelOfCare to fetch.
     */
    where: LevelOfCareWhereUniqueInput
  }

  /**
   * LevelOfCare findUniqueOrThrow
   */
  export type LevelOfCareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
    /**
     * Filter, which LevelOfCare to fetch.
     */
    where: LevelOfCareWhereUniqueInput
  }

  /**
   * LevelOfCare findFirst
   */
  export type LevelOfCareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
    /**
     * Filter, which LevelOfCare to fetch.
     */
    where?: LevelOfCareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelOfCares to fetch.
     */
    orderBy?: LevelOfCareOrderByWithRelationInput | LevelOfCareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelOfCares.
     */
    cursor?: LevelOfCareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelOfCares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelOfCares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelOfCares.
     */
    distinct?: LevelOfCareScalarFieldEnum | LevelOfCareScalarFieldEnum[]
  }

  /**
   * LevelOfCare findFirstOrThrow
   */
  export type LevelOfCareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
    /**
     * Filter, which LevelOfCare to fetch.
     */
    where?: LevelOfCareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelOfCares to fetch.
     */
    orderBy?: LevelOfCareOrderByWithRelationInput | LevelOfCareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelOfCares.
     */
    cursor?: LevelOfCareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelOfCares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelOfCares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelOfCares.
     */
    distinct?: LevelOfCareScalarFieldEnum | LevelOfCareScalarFieldEnum[]
  }

  /**
   * LevelOfCare findMany
   */
  export type LevelOfCareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
    /**
     * Filter, which LevelOfCares to fetch.
     */
    where?: LevelOfCareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelOfCares to fetch.
     */
    orderBy?: LevelOfCareOrderByWithRelationInput | LevelOfCareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LevelOfCares.
     */
    cursor?: LevelOfCareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelOfCares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelOfCares.
     */
    skip?: number
    distinct?: LevelOfCareScalarFieldEnum | LevelOfCareScalarFieldEnum[]
  }

  /**
   * LevelOfCare create
   */
  export type LevelOfCareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
    /**
     * The data needed to create a LevelOfCare.
     */
    data: XOR<LevelOfCareCreateInput, LevelOfCareUncheckedCreateInput>
  }

  /**
   * LevelOfCare createMany
   */
  export type LevelOfCareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LevelOfCares.
     */
    data: LevelOfCareCreateManyInput | LevelOfCareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LevelOfCare createManyAndReturn
   */
  export type LevelOfCareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LevelOfCares.
     */
    data: LevelOfCareCreateManyInput | LevelOfCareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LevelOfCare update
   */
  export type LevelOfCareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
    /**
     * The data needed to update a LevelOfCare.
     */
    data: XOR<LevelOfCareUpdateInput, LevelOfCareUncheckedUpdateInput>
    /**
     * Choose, which LevelOfCare to update.
     */
    where: LevelOfCareWhereUniqueInput
  }

  /**
   * LevelOfCare updateMany
   */
  export type LevelOfCareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LevelOfCares.
     */
    data: XOR<LevelOfCareUpdateManyMutationInput, LevelOfCareUncheckedUpdateManyInput>
    /**
     * Filter which LevelOfCares to update
     */
    where?: LevelOfCareWhereInput
  }

  /**
   * LevelOfCare upsert
   */
  export type LevelOfCareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
    /**
     * The filter to search for the LevelOfCare to update in case it exists.
     */
    where: LevelOfCareWhereUniqueInput
    /**
     * In case the LevelOfCare found by the `where` argument doesn't exist, create a new LevelOfCare with this data.
     */
    create: XOR<LevelOfCareCreateInput, LevelOfCareUncheckedCreateInput>
    /**
     * In case the LevelOfCare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelOfCareUpdateInput, LevelOfCareUncheckedUpdateInput>
  }

  /**
   * LevelOfCare delete
   */
  export type LevelOfCareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
    /**
     * Filter which LevelOfCare to delete.
     */
    where: LevelOfCareWhereUniqueInput
  }

  /**
   * LevelOfCare deleteMany
   */
  export type LevelOfCareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelOfCares to delete
     */
    where?: LevelOfCareWhereInput
  }

  /**
   * LevelOfCare.rehabs
   */
  export type LevelOfCare$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * LevelOfCare without action
   */
  export type LevelOfCareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelOfCare
     */
    select?: LevelOfCareSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelOfCareInclude<ExtArgs> | null
  }


  /**
   * Model Condition
   */

  export type AggregateCondition = {
    _count: ConditionCountAggregateOutputType | null
    _avg: ConditionAvgAggregateOutputType | null
    _sum: ConditionSumAggregateOutputType | null
    _min: ConditionMinAggregateOutputType | null
    _max: ConditionMaxAggregateOutputType | null
  }

  export type ConditionAvgAggregateOutputType = {
    id: number | null
  }

  export type ConditionSumAggregateOutputType = {
    id: number | null
  }

  export type ConditionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ConditionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ConditionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ConditionAvgAggregateInputType = {
    id?: true
  }

  export type ConditionSumAggregateInputType = {
    id?: true
  }

  export type ConditionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ConditionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ConditionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Condition to aggregate.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conditions
    **/
    _count?: true | ConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConditionMaxAggregateInputType
  }

  export type GetConditionAggregateType<T extends ConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateCondition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCondition[P]>
      : GetScalarType<T[P], AggregateCondition[P]>
  }




  export type ConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConditionWhereInput
    orderBy?: ConditionOrderByWithAggregationInput | ConditionOrderByWithAggregationInput[]
    by: ConditionScalarFieldEnum[] | ConditionScalarFieldEnum
    having?: ConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConditionCountAggregateInputType | true
    _avg?: ConditionAvgAggregateInputType
    _sum?: ConditionSumAggregateInputType
    _min?: ConditionMinAggregateInputType
    _max?: ConditionMaxAggregateInputType
  }

  export type ConditionGroupByOutputType = {
    id: number
    name: string
    _count: ConditionCountAggregateOutputType | null
    _avg: ConditionAvgAggregateOutputType | null
    _sum: ConditionSumAggregateOutputType | null
    _min: ConditionMinAggregateOutputType | null
    _max: ConditionMaxAggregateOutputType | null
  }

  type GetConditionGroupByPayload<T extends ConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConditionGroupByOutputType[P]>
            : GetScalarType<T[P], ConditionGroupByOutputType[P]>
        }
      >
    >


  export type ConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | Condition$rehabsArgs<ExtArgs>
    _count?: boolean | ConditionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["condition"]>

  export type ConditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["condition"]>

  export type ConditionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ConditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | Condition$rehabsArgs<ExtArgs>
    _count?: boolean | ConditionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Condition"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["condition"]>
    composites: {}
  }

  type ConditionGetPayload<S extends boolean | null | undefined | ConditionDefaultArgs> = $Result.GetResult<Prisma.$ConditionPayload, S>

  type ConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConditionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConditionCountAggregateInputType | true
    }

  export interface ConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Condition'], meta: { name: 'Condition' } }
    /**
     * Find zero or one Condition that matches the filter.
     * @param {ConditionFindUniqueArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConditionFindUniqueArgs>(args: SelectSubset<T, ConditionFindUniqueArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Condition that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConditionFindUniqueOrThrowArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConditionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Condition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionFindFirstArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConditionFindFirstArgs>(args?: SelectSubset<T, ConditionFindFirstArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Condition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionFindFirstOrThrowArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConditionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Conditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conditions
     * const conditions = await prisma.condition.findMany()
     * 
     * // Get first 10 Conditions
     * const conditions = await prisma.condition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conditionWithIdOnly = await prisma.condition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConditionFindManyArgs>(args?: SelectSubset<T, ConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Condition.
     * @param {ConditionCreateArgs} args - Arguments to create a Condition.
     * @example
     * // Create one Condition
     * const Condition = await prisma.condition.create({
     *   data: {
     *     // ... data to create a Condition
     *   }
     * })
     * 
     */
    create<T extends ConditionCreateArgs>(args: SelectSubset<T, ConditionCreateArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Conditions.
     * @param {ConditionCreateManyArgs} args - Arguments to create many Conditions.
     * @example
     * // Create many Conditions
     * const condition = await prisma.condition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConditionCreateManyArgs>(args?: SelectSubset<T, ConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conditions and returns the data saved in the database.
     * @param {ConditionCreateManyAndReturnArgs} args - Arguments to create many Conditions.
     * @example
     * // Create many Conditions
     * const condition = await prisma.condition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conditions and only return the `id`
     * const conditionWithIdOnly = await prisma.condition.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConditionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Condition.
     * @param {ConditionDeleteArgs} args - Arguments to delete one Condition.
     * @example
     * // Delete one Condition
     * const Condition = await prisma.condition.delete({
     *   where: {
     *     // ... filter to delete one Condition
     *   }
     * })
     * 
     */
    delete<T extends ConditionDeleteArgs>(args: SelectSubset<T, ConditionDeleteArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Condition.
     * @param {ConditionUpdateArgs} args - Arguments to update one Condition.
     * @example
     * // Update one Condition
     * const condition = await prisma.condition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConditionUpdateArgs>(args: SelectSubset<T, ConditionUpdateArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Conditions.
     * @param {ConditionDeleteManyArgs} args - Arguments to filter Conditions to delete.
     * @example
     * // Delete a few Conditions
     * const { count } = await prisma.condition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConditionDeleteManyArgs>(args?: SelectSubset<T, ConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conditions
     * const condition = await prisma.condition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConditionUpdateManyArgs>(args: SelectSubset<T, ConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Condition.
     * @param {ConditionUpsertArgs} args - Arguments to update or create a Condition.
     * @example
     * // Update or create a Condition
     * const condition = await prisma.condition.upsert({
     *   create: {
     *     // ... data to create a Condition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Condition we want to update
     *   }
     * })
     */
    upsert<T extends ConditionUpsertArgs>(args: SelectSubset<T, ConditionUpsertArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Conditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionCountArgs} args - Arguments to filter Conditions to count.
     * @example
     * // Count the number of Conditions
     * const count = await prisma.condition.count({
     *   where: {
     *     // ... the filter for the Conditions we want to count
     *   }
     * })
    **/
    count<T extends ConditionCountArgs>(
      args?: Subset<T, ConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Condition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConditionAggregateArgs>(args: Subset<T, ConditionAggregateArgs>): Prisma.PrismaPromise<GetConditionAggregateType<T>>

    /**
     * Group by Condition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionGroupByArgs} args - Group by arguments.
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
      T extends ConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConditionGroupByArgs['orderBy'] }
        : { orderBy?: ConditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Condition model
   */
  readonly fields: ConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Condition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends Condition$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, Condition$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Condition model
   */ 
  interface ConditionFieldRefs {
    readonly id: FieldRef<"Condition", 'Int'>
    readonly name: FieldRef<"Condition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Condition findUnique
   */
  export type ConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition findUniqueOrThrow
   */
  export type ConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition findFirst
   */
  export type ConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conditions.
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conditions.
     */
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Condition findFirstOrThrow
   */
  export type ConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conditions.
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conditions.
     */
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Condition findMany
   */
  export type ConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Conditions to fetch.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conditions.
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Condition create
   */
  export type ConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * The data needed to create a Condition.
     */
    data: XOR<ConditionCreateInput, ConditionUncheckedCreateInput>
  }

  /**
   * Condition createMany
   */
  export type ConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conditions.
     */
    data: ConditionCreateManyInput | ConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Condition createManyAndReturn
   */
  export type ConditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Conditions.
     */
    data: ConditionCreateManyInput | ConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Condition update
   */
  export type ConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * The data needed to update a Condition.
     */
    data: XOR<ConditionUpdateInput, ConditionUncheckedUpdateInput>
    /**
     * Choose, which Condition to update.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition updateMany
   */
  export type ConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conditions.
     */
    data: XOR<ConditionUpdateManyMutationInput, ConditionUncheckedUpdateManyInput>
    /**
     * Filter which Conditions to update
     */
    where?: ConditionWhereInput
  }

  /**
   * Condition upsert
   */
  export type ConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * The filter to search for the Condition to update in case it exists.
     */
    where: ConditionWhereUniqueInput
    /**
     * In case the Condition found by the `where` argument doesn't exist, create a new Condition with this data.
     */
    create: XOR<ConditionCreateInput, ConditionUncheckedCreateInput>
    /**
     * In case the Condition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConditionUpdateInput, ConditionUncheckedUpdateInput>
  }

  /**
   * Condition delete
   */
  export type ConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter which Condition to delete.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition deleteMany
   */
  export type ConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conditions to delete
     */
    where?: ConditionWhereInput
  }

  /**
   * Condition.rehabs
   */
  export type Condition$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * Condition without action
   */
  export type ConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
  }


  /**
   * Model Treatment
   */

  export type AggregateTreatment = {
    _count: TreatmentCountAggregateOutputType | null
    _avg: TreatmentAvgAggregateOutputType | null
    _sum: TreatmentSumAggregateOutputType | null
    _min: TreatmentMinAggregateOutputType | null
    _max: TreatmentMaxAggregateOutputType | null
  }

  export type TreatmentAvgAggregateOutputType = {
    id: number | null
  }

  export type TreatmentSumAggregateOutputType = {
    id: number | null
  }

  export type TreatmentMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TreatmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TreatmentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TreatmentAvgAggregateInputType = {
    id?: true
  }

  export type TreatmentSumAggregateInputType = {
    id?: true
  }

  export type TreatmentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TreatmentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TreatmentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TreatmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treatment to aggregate.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Treatments
    **/
    _count?: true | TreatmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreatmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreatmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentMaxAggregateInputType
  }

  export type GetTreatmentAggregateType<T extends TreatmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatment[P]>
      : GetScalarType<T[P], AggregateTreatment[P]>
  }




  export type TreatmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentWhereInput
    orderBy?: TreatmentOrderByWithAggregationInput | TreatmentOrderByWithAggregationInput[]
    by: TreatmentScalarFieldEnum[] | TreatmentScalarFieldEnum
    having?: TreatmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentCountAggregateInputType | true
    _avg?: TreatmentAvgAggregateInputType
    _sum?: TreatmentSumAggregateInputType
    _min?: TreatmentMinAggregateInputType
    _max?: TreatmentMaxAggregateInputType
  }

  export type TreatmentGroupByOutputType = {
    id: number
    name: string
    _count: TreatmentCountAggregateOutputType | null
    _avg: TreatmentAvgAggregateOutputType | null
    _sum: TreatmentSumAggregateOutputType | null
    _min: TreatmentMinAggregateOutputType | null
    _max: TreatmentMaxAggregateOutputType | null
  }

  type GetTreatmentGroupByPayload<T extends TreatmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | Treatment$rehabsArgs<ExtArgs>
    _count?: boolean | TreatmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatment"]>

  export type TreatmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["treatment"]>

  export type TreatmentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TreatmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | Treatment$rehabsArgs<ExtArgs>
    _count?: boolean | TreatmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TreatmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TreatmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Treatment"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["treatment"]>
    composites: {}
  }

  type TreatmentGetPayload<S extends boolean | null | undefined | TreatmentDefaultArgs> = $Result.GetResult<Prisma.$TreatmentPayload, S>

  type TreatmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TreatmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TreatmentCountAggregateInputType | true
    }

  export interface TreatmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Treatment'], meta: { name: 'Treatment' } }
    /**
     * Find zero or one Treatment that matches the filter.
     * @param {TreatmentFindUniqueArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentFindUniqueArgs>(args: SelectSubset<T, TreatmentFindUniqueArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Treatment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TreatmentFindUniqueOrThrowArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Treatment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindFirstArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentFindFirstArgs>(args?: SelectSubset<T, TreatmentFindFirstArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Treatment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindFirstOrThrowArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Treatments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Treatments
     * const treatments = await prisma.treatment.findMany()
     * 
     * // Get first 10 Treatments
     * const treatments = await prisma.treatment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treatmentWithIdOnly = await prisma.treatment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreatmentFindManyArgs>(args?: SelectSubset<T, TreatmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Treatment.
     * @param {TreatmentCreateArgs} args - Arguments to create a Treatment.
     * @example
     * // Create one Treatment
     * const Treatment = await prisma.treatment.create({
     *   data: {
     *     // ... data to create a Treatment
     *   }
     * })
     * 
     */
    create<T extends TreatmentCreateArgs>(args: SelectSubset<T, TreatmentCreateArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Treatments.
     * @param {TreatmentCreateManyArgs} args - Arguments to create many Treatments.
     * @example
     * // Create many Treatments
     * const treatment = await prisma.treatment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentCreateManyArgs>(args?: SelectSubset<T, TreatmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Treatments and returns the data saved in the database.
     * @param {TreatmentCreateManyAndReturnArgs} args - Arguments to create many Treatments.
     * @example
     * // Create many Treatments
     * const treatment = await prisma.treatment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Treatments and only return the `id`
     * const treatmentWithIdOnly = await prisma.treatment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreatmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TreatmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Treatment.
     * @param {TreatmentDeleteArgs} args - Arguments to delete one Treatment.
     * @example
     * // Delete one Treatment
     * const Treatment = await prisma.treatment.delete({
     *   where: {
     *     // ... filter to delete one Treatment
     *   }
     * })
     * 
     */
    delete<T extends TreatmentDeleteArgs>(args: SelectSubset<T, TreatmentDeleteArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Treatment.
     * @param {TreatmentUpdateArgs} args - Arguments to update one Treatment.
     * @example
     * // Update one Treatment
     * const treatment = await prisma.treatment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentUpdateArgs>(args: SelectSubset<T, TreatmentUpdateArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Treatments.
     * @param {TreatmentDeleteManyArgs} args - Arguments to filter Treatments to delete.
     * @example
     * // Delete a few Treatments
     * const { count } = await prisma.treatment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentDeleteManyArgs>(args?: SelectSubset<T, TreatmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Treatments
     * const treatment = await prisma.treatment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentUpdateManyArgs>(args: SelectSubset<T, TreatmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Treatment.
     * @param {TreatmentUpsertArgs} args - Arguments to update or create a Treatment.
     * @example
     * // Update or create a Treatment
     * const treatment = await prisma.treatment.upsert({
     *   create: {
     *     // ... data to create a Treatment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Treatment we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentUpsertArgs>(args: SelectSubset<T, TreatmentUpsertArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCountArgs} args - Arguments to filter Treatments to count.
     * @example
     * // Count the number of Treatments
     * const count = await prisma.treatment.count({
     *   where: {
     *     // ... the filter for the Treatments we want to count
     *   }
     * })
    **/
    count<T extends TreatmentCountArgs>(
      args?: Subset<T, TreatmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Treatment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreatmentAggregateArgs>(args: Subset<T, TreatmentAggregateArgs>): Prisma.PrismaPromise<GetTreatmentAggregateType<T>>

    /**
     * Group by Treatment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentGroupByArgs} args - Group by arguments.
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
      T extends TreatmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreatmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Treatment model
   */
  readonly fields: TreatmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Treatment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends Treatment$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, Treatment$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Treatment model
   */ 
  interface TreatmentFieldRefs {
    readonly id: FieldRef<"Treatment", 'Int'>
    readonly name: FieldRef<"Treatment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Treatment findUnique
   */
  export type TreatmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment findUniqueOrThrow
   */
  export type TreatmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment findFirst
   */
  export type TreatmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treatments.
     */
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment findFirstOrThrow
   */
  export type TreatmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treatments.
     */
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment findMany
   */
  export type TreatmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatments to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment create
   */
  export type TreatmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Treatment.
     */
    data: XOR<TreatmentCreateInput, TreatmentUncheckedCreateInput>
  }

  /**
   * Treatment createMany
   */
  export type TreatmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Treatments.
     */
    data: TreatmentCreateManyInput | TreatmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Treatment createManyAndReturn
   */
  export type TreatmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Treatments.
     */
    data: TreatmentCreateManyInput | TreatmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Treatment update
   */
  export type TreatmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Treatment.
     */
    data: XOR<TreatmentUpdateInput, TreatmentUncheckedUpdateInput>
    /**
     * Choose, which Treatment to update.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment updateMany
   */
  export type TreatmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Treatments.
     */
    data: XOR<TreatmentUpdateManyMutationInput, TreatmentUncheckedUpdateManyInput>
    /**
     * Filter which Treatments to update
     */
    where?: TreatmentWhereInput
  }

  /**
   * Treatment upsert
   */
  export type TreatmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Treatment to update in case it exists.
     */
    where: TreatmentWhereUniqueInput
    /**
     * In case the Treatment found by the `where` argument doesn't exist, create a new Treatment with this data.
     */
    create: XOR<TreatmentCreateInput, TreatmentUncheckedCreateInput>
    /**
     * In case the Treatment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentUpdateInput, TreatmentUncheckedUpdateInput>
  }

  /**
   * Treatment delete
   */
  export type TreatmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter which Treatment to delete.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment deleteMany
   */
  export type TreatmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treatments to delete
     */
    where?: TreatmentWhereInput
  }

  /**
   * Treatment.rehabs
   */
  export type Treatment$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * Treatment without action
   */
  export type TreatmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
  }


  /**
   * Model InsuranceProvider
   */

  export type AggregateInsuranceProvider = {
    _count: InsuranceProviderCountAggregateOutputType | null
    _avg: InsuranceProviderAvgAggregateOutputType | null
    _sum: InsuranceProviderSumAggregateOutputType | null
    _min: InsuranceProviderMinAggregateOutputType | null
    _max: InsuranceProviderMaxAggregateOutputType | null
  }

  export type InsuranceProviderAvgAggregateOutputType = {
    id: number | null
  }

  export type InsuranceProviderSumAggregateOutputType = {
    id: number | null
  }

  export type InsuranceProviderMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type InsuranceProviderMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type InsuranceProviderCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type InsuranceProviderAvgAggregateInputType = {
    id?: true
  }

  export type InsuranceProviderSumAggregateInputType = {
    id?: true
  }

  export type InsuranceProviderMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type InsuranceProviderMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type InsuranceProviderCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type InsuranceProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InsuranceProvider to aggregate.
     */
    where?: InsuranceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsuranceProviders to fetch.
     */
    orderBy?: InsuranceProviderOrderByWithRelationInput | InsuranceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsuranceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsuranceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsuranceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InsuranceProviders
    **/
    _count?: true | InsuranceProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsuranceProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsuranceProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsuranceProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsuranceProviderMaxAggregateInputType
  }

  export type GetInsuranceProviderAggregateType<T extends InsuranceProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateInsuranceProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsuranceProvider[P]>
      : GetScalarType<T[P], AggregateInsuranceProvider[P]>
  }




  export type InsuranceProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsuranceProviderWhereInput
    orderBy?: InsuranceProviderOrderByWithAggregationInput | InsuranceProviderOrderByWithAggregationInput[]
    by: InsuranceProviderScalarFieldEnum[] | InsuranceProviderScalarFieldEnum
    having?: InsuranceProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsuranceProviderCountAggregateInputType | true
    _avg?: InsuranceProviderAvgAggregateInputType
    _sum?: InsuranceProviderSumAggregateInputType
    _min?: InsuranceProviderMinAggregateInputType
    _max?: InsuranceProviderMaxAggregateInputType
  }

  export type InsuranceProviderGroupByOutputType = {
    id: number
    name: string
    _count: InsuranceProviderCountAggregateOutputType | null
    _avg: InsuranceProviderAvgAggregateOutputType | null
    _sum: InsuranceProviderSumAggregateOutputType | null
    _min: InsuranceProviderMinAggregateOutputType | null
    _max: InsuranceProviderMaxAggregateOutputType | null
  }

  type GetInsuranceProviderGroupByPayload<T extends InsuranceProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsuranceProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsuranceProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsuranceProviderGroupByOutputType[P]>
            : GetScalarType<T[P], InsuranceProviderGroupByOutputType[P]>
        }
      >
    >


  export type InsuranceProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | InsuranceProvider$rehabsArgs<ExtArgs>
    _count?: boolean | InsuranceProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insuranceProvider"]>

  export type InsuranceProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["insuranceProvider"]>

  export type InsuranceProviderSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type InsuranceProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | InsuranceProvider$rehabsArgs<ExtArgs>
    _count?: boolean | InsuranceProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InsuranceProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InsuranceProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InsuranceProvider"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["insuranceProvider"]>
    composites: {}
  }

  type InsuranceProviderGetPayload<S extends boolean | null | undefined | InsuranceProviderDefaultArgs> = $Result.GetResult<Prisma.$InsuranceProviderPayload, S>

  type InsuranceProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InsuranceProviderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InsuranceProviderCountAggregateInputType | true
    }

  export interface InsuranceProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InsuranceProvider'], meta: { name: 'InsuranceProvider' } }
    /**
     * Find zero or one InsuranceProvider that matches the filter.
     * @param {InsuranceProviderFindUniqueArgs} args - Arguments to find a InsuranceProvider
     * @example
     * // Get one InsuranceProvider
     * const insuranceProvider = await prisma.insuranceProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsuranceProviderFindUniqueArgs>(args: SelectSubset<T, InsuranceProviderFindUniqueArgs<ExtArgs>>): Prisma__InsuranceProviderClient<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InsuranceProvider that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InsuranceProviderFindUniqueOrThrowArgs} args - Arguments to find a InsuranceProvider
     * @example
     * // Get one InsuranceProvider
     * const insuranceProvider = await prisma.insuranceProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsuranceProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, InsuranceProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsuranceProviderClient<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InsuranceProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceProviderFindFirstArgs} args - Arguments to find a InsuranceProvider
     * @example
     * // Get one InsuranceProvider
     * const insuranceProvider = await prisma.insuranceProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsuranceProviderFindFirstArgs>(args?: SelectSubset<T, InsuranceProviderFindFirstArgs<ExtArgs>>): Prisma__InsuranceProviderClient<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InsuranceProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceProviderFindFirstOrThrowArgs} args - Arguments to find a InsuranceProvider
     * @example
     * // Get one InsuranceProvider
     * const insuranceProvider = await prisma.insuranceProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsuranceProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, InsuranceProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsuranceProviderClient<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InsuranceProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InsuranceProviders
     * const insuranceProviders = await prisma.insuranceProvider.findMany()
     * 
     * // Get first 10 InsuranceProviders
     * const insuranceProviders = await prisma.insuranceProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insuranceProviderWithIdOnly = await prisma.insuranceProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsuranceProviderFindManyArgs>(args?: SelectSubset<T, InsuranceProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InsuranceProvider.
     * @param {InsuranceProviderCreateArgs} args - Arguments to create a InsuranceProvider.
     * @example
     * // Create one InsuranceProvider
     * const InsuranceProvider = await prisma.insuranceProvider.create({
     *   data: {
     *     // ... data to create a InsuranceProvider
     *   }
     * })
     * 
     */
    create<T extends InsuranceProviderCreateArgs>(args: SelectSubset<T, InsuranceProviderCreateArgs<ExtArgs>>): Prisma__InsuranceProviderClient<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InsuranceProviders.
     * @param {InsuranceProviderCreateManyArgs} args - Arguments to create many InsuranceProviders.
     * @example
     * // Create many InsuranceProviders
     * const insuranceProvider = await prisma.insuranceProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsuranceProviderCreateManyArgs>(args?: SelectSubset<T, InsuranceProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InsuranceProviders and returns the data saved in the database.
     * @param {InsuranceProviderCreateManyAndReturnArgs} args - Arguments to create many InsuranceProviders.
     * @example
     * // Create many InsuranceProviders
     * const insuranceProvider = await prisma.insuranceProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InsuranceProviders and only return the `id`
     * const insuranceProviderWithIdOnly = await prisma.insuranceProvider.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsuranceProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, InsuranceProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InsuranceProvider.
     * @param {InsuranceProviderDeleteArgs} args - Arguments to delete one InsuranceProvider.
     * @example
     * // Delete one InsuranceProvider
     * const InsuranceProvider = await prisma.insuranceProvider.delete({
     *   where: {
     *     // ... filter to delete one InsuranceProvider
     *   }
     * })
     * 
     */
    delete<T extends InsuranceProviderDeleteArgs>(args: SelectSubset<T, InsuranceProviderDeleteArgs<ExtArgs>>): Prisma__InsuranceProviderClient<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InsuranceProvider.
     * @param {InsuranceProviderUpdateArgs} args - Arguments to update one InsuranceProvider.
     * @example
     * // Update one InsuranceProvider
     * const insuranceProvider = await prisma.insuranceProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsuranceProviderUpdateArgs>(args: SelectSubset<T, InsuranceProviderUpdateArgs<ExtArgs>>): Prisma__InsuranceProviderClient<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InsuranceProviders.
     * @param {InsuranceProviderDeleteManyArgs} args - Arguments to filter InsuranceProviders to delete.
     * @example
     * // Delete a few InsuranceProviders
     * const { count } = await prisma.insuranceProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsuranceProviderDeleteManyArgs>(args?: SelectSubset<T, InsuranceProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InsuranceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InsuranceProviders
     * const insuranceProvider = await prisma.insuranceProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsuranceProviderUpdateManyArgs>(args: SelectSubset<T, InsuranceProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InsuranceProvider.
     * @param {InsuranceProviderUpsertArgs} args - Arguments to update or create a InsuranceProvider.
     * @example
     * // Update or create a InsuranceProvider
     * const insuranceProvider = await prisma.insuranceProvider.upsert({
     *   create: {
     *     // ... data to create a InsuranceProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InsuranceProvider we want to update
     *   }
     * })
     */
    upsert<T extends InsuranceProviderUpsertArgs>(args: SelectSubset<T, InsuranceProviderUpsertArgs<ExtArgs>>): Prisma__InsuranceProviderClient<$Result.GetResult<Prisma.$InsuranceProviderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InsuranceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceProviderCountArgs} args - Arguments to filter InsuranceProviders to count.
     * @example
     * // Count the number of InsuranceProviders
     * const count = await prisma.insuranceProvider.count({
     *   where: {
     *     // ... the filter for the InsuranceProviders we want to count
     *   }
     * })
    **/
    count<T extends InsuranceProviderCountArgs>(
      args?: Subset<T, InsuranceProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsuranceProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InsuranceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsuranceProviderAggregateArgs>(args: Subset<T, InsuranceProviderAggregateArgs>): Prisma.PrismaPromise<GetInsuranceProviderAggregateType<T>>

    /**
     * Group by InsuranceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceProviderGroupByArgs} args - Group by arguments.
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
      T extends InsuranceProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsuranceProviderGroupByArgs['orderBy'] }
        : { orderBy?: InsuranceProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsuranceProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsuranceProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InsuranceProvider model
   */
  readonly fields: InsuranceProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InsuranceProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsuranceProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends InsuranceProvider$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, InsuranceProvider$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the InsuranceProvider model
   */ 
  interface InsuranceProviderFieldRefs {
    readonly id: FieldRef<"InsuranceProvider", 'Int'>
    readonly name: FieldRef<"InsuranceProvider", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InsuranceProvider findUnique
   */
  export type InsuranceProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
    /**
     * Filter, which InsuranceProvider to fetch.
     */
    where: InsuranceProviderWhereUniqueInput
  }

  /**
   * InsuranceProvider findUniqueOrThrow
   */
  export type InsuranceProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
    /**
     * Filter, which InsuranceProvider to fetch.
     */
    where: InsuranceProviderWhereUniqueInput
  }

  /**
   * InsuranceProvider findFirst
   */
  export type InsuranceProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
    /**
     * Filter, which InsuranceProvider to fetch.
     */
    where?: InsuranceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsuranceProviders to fetch.
     */
    orderBy?: InsuranceProviderOrderByWithRelationInput | InsuranceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InsuranceProviders.
     */
    cursor?: InsuranceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsuranceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsuranceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InsuranceProviders.
     */
    distinct?: InsuranceProviderScalarFieldEnum | InsuranceProviderScalarFieldEnum[]
  }

  /**
   * InsuranceProvider findFirstOrThrow
   */
  export type InsuranceProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
    /**
     * Filter, which InsuranceProvider to fetch.
     */
    where?: InsuranceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsuranceProviders to fetch.
     */
    orderBy?: InsuranceProviderOrderByWithRelationInput | InsuranceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InsuranceProviders.
     */
    cursor?: InsuranceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsuranceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsuranceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InsuranceProviders.
     */
    distinct?: InsuranceProviderScalarFieldEnum | InsuranceProviderScalarFieldEnum[]
  }

  /**
   * InsuranceProvider findMany
   */
  export type InsuranceProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
    /**
     * Filter, which InsuranceProviders to fetch.
     */
    where?: InsuranceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsuranceProviders to fetch.
     */
    orderBy?: InsuranceProviderOrderByWithRelationInput | InsuranceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InsuranceProviders.
     */
    cursor?: InsuranceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsuranceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsuranceProviders.
     */
    skip?: number
    distinct?: InsuranceProviderScalarFieldEnum | InsuranceProviderScalarFieldEnum[]
  }

  /**
   * InsuranceProvider create
   */
  export type InsuranceProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a InsuranceProvider.
     */
    data: XOR<InsuranceProviderCreateInput, InsuranceProviderUncheckedCreateInput>
  }

  /**
   * InsuranceProvider createMany
   */
  export type InsuranceProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InsuranceProviders.
     */
    data: InsuranceProviderCreateManyInput | InsuranceProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InsuranceProvider createManyAndReturn
   */
  export type InsuranceProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InsuranceProviders.
     */
    data: InsuranceProviderCreateManyInput | InsuranceProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InsuranceProvider update
   */
  export type InsuranceProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a InsuranceProvider.
     */
    data: XOR<InsuranceProviderUpdateInput, InsuranceProviderUncheckedUpdateInput>
    /**
     * Choose, which InsuranceProvider to update.
     */
    where: InsuranceProviderWhereUniqueInput
  }

  /**
   * InsuranceProvider updateMany
   */
  export type InsuranceProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InsuranceProviders.
     */
    data: XOR<InsuranceProviderUpdateManyMutationInput, InsuranceProviderUncheckedUpdateManyInput>
    /**
     * Filter which InsuranceProviders to update
     */
    where?: InsuranceProviderWhereInput
  }

  /**
   * InsuranceProvider upsert
   */
  export type InsuranceProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the InsuranceProvider to update in case it exists.
     */
    where: InsuranceProviderWhereUniqueInput
    /**
     * In case the InsuranceProvider found by the `where` argument doesn't exist, create a new InsuranceProvider with this data.
     */
    create: XOR<InsuranceProviderCreateInput, InsuranceProviderUncheckedCreateInput>
    /**
     * In case the InsuranceProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsuranceProviderUpdateInput, InsuranceProviderUncheckedUpdateInput>
  }

  /**
   * InsuranceProvider delete
   */
  export type InsuranceProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
    /**
     * Filter which InsuranceProvider to delete.
     */
    where: InsuranceProviderWhereUniqueInput
  }

  /**
   * InsuranceProvider deleteMany
   */
  export type InsuranceProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InsuranceProviders to delete
     */
    where?: InsuranceProviderWhereInput
  }

  /**
   * InsuranceProvider.rehabs
   */
  export type InsuranceProvider$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * InsuranceProvider without action
   */
  export type InsuranceProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceProvider
     */
    select?: InsuranceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceProviderInclude<ExtArgs> | null
  }


  /**
   * Model Clientele
   */

  export type AggregateClientele = {
    _count: ClienteleCountAggregateOutputType | null
    _avg: ClienteleAvgAggregateOutputType | null
    _sum: ClienteleSumAggregateOutputType | null
    _min: ClienteleMinAggregateOutputType | null
    _max: ClienteleMaxAggregateOutputType | null
  }

  export type ClienteleAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteleSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ClienteleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ClienteleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ClienteleAvgAggregateInputType = {
    id?: true
  }

  export type ClienteleSumAggregateInputType = {
    id?: true
  }

  export type ClienteleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClienteleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClienteleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ClienteleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientele to aggregate.
     */
    where?: ClienteleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clienteles to fetch.
     */
    orderBy?: ClienteleOrderByWithRelationInput | ClienteleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clienteles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clienteles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clienteles
    **/
    _count?: true | ClienteleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteleMaxAggregateInputType
  }

  export type GetClienteleAggregateType<T extends ClienteleAggregateArgs> = {
        [P in keyof T & keyof AggregateClientele]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientele[P]>
      : GetScalarType<T[P], AggregateClientele[P]>
  }




  export type ClienteleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteleWhereInput
    orderBy?: ClienteleOrderByWithAggregationInput | ClienteleOrderByWithAggregationInput[]
    by: ClienteleScalarFieldEnum[] | ClienteleScalarFieldEnum
    having?: ClienteleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteleCountAggregateInputType | true
    _avg?: ClienteleAvgAggregateInputType
    _sum?: ClienteleSumAggregateInputType
    _min?: ClienteleMinAggregateInputType
    _max?: ClienteleMaxAggregateInputType
  }

  export type ClienteleGroupByOutputType = {
    id: number
    name: string
    _count: ClienteleCountAggregateOutputType | null
    _avg: ClienteleAvgAggregateOutputType | null
    _sum: ClienteleSumAggregateOutputType | null
    _min: ClienteleMinAggregateOutputType | null
    _max: ClienteleMaxAggregateOutputType | null
  }

  type GetClienteleGroupByPayload<T extends ClienteleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteleGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteleGroupByOutputType[P]>
        }
      >
    >


  export type ClienteleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | Clientele$rehabsArgs<ExtArgs>
    _count?: boolean | ClienteleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientele"]>

  export type ClienteleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["clientele"]>

  export type ClienteleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ClienteleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | Clientele$rehabsArgs<ExtArgs>
    _count?: boolean | ClienteleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientelePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clientele"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["clientele"]>
    composites: {}
  }

  type ClienteleGetPayload<S extends boolean | null | undefined | ClienteleDefaultArgs> = $Result.GetResult<Prisma.$ClientelePayload, S>

  type ClienteleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClienteleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClienteleCountAggregateInputType | true
    }

  export interface ClienteleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clientele'], meta: { name: 'Clientele' } }
    /**
     * Find zero or one Clientele that matches the filter.
     * @param {ClienteleFindUniqueArgs} args - Arguments to find a Clientele
     * @example
     * // Get one Clientele
     * const clientele = await prisma.clientele.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteleFindUniqueArgs>(args: SelectSubset<T, ClienteleFindUniqueArgs<ExtArgs>>): Prisma__ClienteleClient<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Clientele that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClienteleFindUniqueOrThrowArgs} args - Arguments to find a Clientele
     * @example
     * // Get one Clientele
     * const clientele = await prisma.clientele.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteleFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteleClient<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Clientele that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteleFindFirstArgs} args - Arguments to find a Clientele
     * @example
     * // Get one Clientele
     * const clientele = await prisma.clientele.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteleFindFirstArgs>(args?: SelectSubset<T, ClienteleFindFirstArgs<ExtArgs>>): Prisma__ClienteleClient<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Clientele that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteleFindFirstOrThrowArgs} args - Arguments to find a Clientele
     * @example
     * // Get one Clientele
     * const clientele = await prisma.clientele.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteleFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteleClient<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clienteles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clienteles
     * const clienteles = await prisma.clientele.findMany()
     * 
     * // Get first 10 Clienteles
     * const clienteles = await prisma.clientele.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteleWithIdOnly = await prisma.clientele.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteleFindManyArgs>(args?: SelectSubset<T, ClienteleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Clientele.
     * @param {ClienteleCreateArgs} args - Arguments to create a Clientele.
     * @example
     * // Create one Clientele
     * const Clientele = await prisma.clientele.create({
     *   data: {
     *     // ... data to create a Clientele
     *   }
     * })
     * 
     */
    create<T extends ClienteleCreateArgs>(args: SelectSubset<T, ClienteleCreateArgs<ExtArgs>>): Prisma__ClienteleClient<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clienteles.
     * @param {ClienteleCreateManyArgs} args - Arguments to create many Clienteles.
     * @example
     * // Create many Clienteles
     * const clientele = await prisma.clientele.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteleCreateManyArgs>(args?: SelectSubset<T, ClienteleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clienteles and returns the data saved in the database.
     * @param {ClienteleCreateManyAndReturnArgs} args - Arguments to create many Clienteles.
     * @example
     * // Create many Clienteles
     * const clientele = await prisma.clientele.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clienteles and only return the `id`
     * const clienteleWithIdOnly = await prisma.clientele.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteleCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Clientele.
     * @param {ClienteleDeleteArgs} args - Arguments to delete one Clientele.
     * @example
     * // Delete one Clientele
     * const Clientele = await prisma.clientele.delete({
     *   where: {
     *     // ... filter to delete one Clientele
     *   }
     * })
     * 
     */
    delete<T extends ClienteleDeleteArgs>(args: SelectSubset<T, ClienteleDeleteArgs<ExtArgs>>): Prisma__ClienteleClient<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Clientele.
     * @param {ClienteleUpdateArgs} args - Arguments to update one Clientele.
     * @example
     * // Update one Clientele
     * const clientele = await prisma.clientele.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteleUpdateArgs>(args: SelectSubset<T, ClienteleUpdateArgs<ExtArgs>>): Prisma__ClienteleClient<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clienteles.
     * @param {ClienteleDeleteManyArgs} args - Arguments to filter Clienteles to delete.
     * @example
     * // Delete a few Clienteles
     * const { count } = await prisma.clientele.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteleDeleteManyArgs>(args?: SelectSubset<T, ClienteleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clienteles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clienteles
     * const clientele = await prisma.clientele.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteleUpdateManyArgs>(args: SelectSubset<T, ClienteleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientele.
     * @param {ClienteleUpsertArgs} args - Arguments to update or create a Clientele.
     * @example
     * // Update or create a Clientele
     * const clientele = await prisma.clientele.upsert({
     *   create: {
     *     // ... data to create a Clientele
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientele we want to update
     *   }
     * })
     */
    upsert<T extends ClienteleUpsertArgs>(args: SelectSubset<T, ClienteleUpsertArgs<ExtArgs>>): Prisma__ClienteleClient<$Result.GetResult<Prisma.$ClientelePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clienteles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteleCountArgs} args - Arguments to filter Clienteles to count.
     * @example
     * // Count the number of Clienteles
     * const count = await prisma.clientele.count({
     *   where: {
     *     // ... the filter for the Clienteles we want to count
     *   }
     * })
    **/
    count<T extends ClienteleCountArgs>(
      args?: Subset<T, ClienteleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientele.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteleAggregateArgs>(args: Subset<T, ClienteleAggregateArgs>): Prisma.PrismaPromise<GetClienteleAggregateType<T>>

    /**
     * Group by Clientele.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteleGroupByArgs} args - Group by arguments.
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
      T extends ClienteleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteleGroupByArgs['orderBy'] }
        : { orderBy?: ClienteleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clientele model
   */
  readonly fields: ClienteleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clientele.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends Clientele$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, Clientele$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Clientele model
   */ 
  interface ClienteleFieldRefs {
    readonly id: FieldRef<"Clientele", 'Int'>
    readonly name: FieldRef<"Clientele", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Clientele findUnique
   */
  export type ClienteleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
    /**
     * Filter, which Clientele to fetch.
     */
    where: ClienteleWhereUniqueInput
  }

  /**
   * Clientele findUniqueOrThrow
   */
  export type ClienteleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
    /**
     * Filter, which Clientele to fetch.
     */
    where: ClienteleWhereUniqueInput
  }

  /**
   * Clientele findFirst
   */
  export type ClienteleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
    /**
     * Filter, which Clientele to fetch.
     */
    where?: ClienteleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clienteles to fetch.
     */
    orderBy?: ClienteleOrderByWithRelationInput | ClienteleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clienteles.
     */
    cursor?: ClienteleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clienteles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clienteles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clienteles.
     */
    distinct?: ClienteleScalarFieldEnum | ClienteleScalarFieldEnum[]
  }

  /**
   * Clientele findFirstOrThrow
   */
  export type ClienteleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
    /**
     * Filter, which Clientele to fetch.
     */
    where?: ClienteleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clienteles to fetch.
     */
    orderBy?: ClienteleOrderByWithRelationInput | ClienteleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clienteles.
     */
    cursor?: ClienteleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clienteles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clienteles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clienteles.
     */
    distinct?: ClienteleScalarFieldEnum | ClienteleScalarFieldEnum[]
  }

  /**
   * Clientele findMany
   */
  export type ClienteleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
    /**
     * Filter, which Clienteles to fetch.
     */
    where?: ClienteleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clienteles to fetch.
     */
    orderBy?: ClienteleOrderByWithRelationInput | ClienteleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clienteles.
     */
    cursor?: ClienteleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clienteles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clienteles.
     */
    skip?: number
    distinct?: ClienteleScalarFieldEnum | ClienteleScalarFieldEnum[]
  }

  /**
   * Clientele create
   */
  export type ClienteleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
    /**
     * The data needed to create a Clientele.
     */
    data: XOR<ClienteleCreateInput, ClienteleUncheckedCreateInput>
  }

  /**
   * Clientele createMany
   */
  export type ClienteleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clienteles.
     */
    data: ClienteleCreateManyInput | ClienteleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientele createManyAndReturn
   */
  export type ClienteleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clienteles.
     */
    data: ClienteleCreateManyInput | ClienteleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientele update
   */
  export type ClienteleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
    /**
     * The data needed to update a Clientele.
     */
    data: XOR<ClienteleUpdateInput, ClienteleUncheckedUpdateInput>
    /**
     * Choose, which Clientele to update.
     */
    where: ClienteleWhereUniqueInput
  }

  /**
   * Clientele updateMany
   */
  export type ClienteleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clienteles.
     */
    data: XOR<ClienteleUpdateManyMutationInput, ClienteleUncheckedUpdateManyInput>
    /**
     * Filter which Clienteles to update
     */
    where?: ClienteleWhereInput
  }

  /**
   * Clientele upsert
   */
  export type ClienteleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
    /**
     * The filter to search for the Clientele to update in case it exists.
     */
    where: ClienteleWhereUniqueInput
    /**
     * In case the Clientele found by the `where` argument doesn't exist, create a new Clientele with this data.
     */
    create: XOR<ClienteleCreateInput, ClienteleUncheckedCreateInput>
    /**
     * In case the Clientele was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteleUpdateInput, ClienteleUncheckedUpdateInput>
  }

  /**
   * Clientele delete
   */
  export type ClienteleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
    /**
     * Filter which Clientele to delete.
     */
    where: ClienteleWhereUniqueInput
  }

  /**
   * Clientele deleteMany
   */
  export type ClienteleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clienteles to delete
     */
    where?: ClienteleWhereInput
  }

  /**
   * Clientele.rehabs
   */
  export type Clientele$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * Clientele without action
   */
  export type ClienteleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientele
     */
    select?: ClienteleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteleInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingSumAggregateOutputType = {
    id: number | null
  }

  export type SettingMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SettingMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SettingAvgAggregateInputType = {
    id?: true
  }

  export type SettingSumAggregateInputType = {
    id?: true
  }

  export type SettingMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _avg?: SettingAvgAggregateInputType
    _sum?: SettingSumAggregateInputType
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: number
    name: string
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | Setting$rehabsArgs<ExtArgs>
    _count?: boolean | SettingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | Setting$rehabsArgs<ExtArgs>
    _count?: boolean | SettingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends Setting$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, Setting$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Setting model
   */ 
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'Int'>
    readonly name: FieldRef<"Setting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
  }

  /**
   * Setting.rehabs
   */
  export type Setting$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
  }


  /**
   * Model Approach
   */

  export type AggregateApproach = {
    _count: ApproachCountAggregateOutputType | null
    _avg: ApproachAvgAggregateOutputType | null
    _sum: ApproachSumAggregateOutputType | null
    _min: ApproachMinAggregateOutputType | null
    _max: ApproachMaxAggregateOutputType | null
  }

  export type ApproachAvgAggregateOutputType = {
    id: number | null
  }

  export type ApproachSumAggregateOutputType = {
    id: number | null
  }

  export type ApproachMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ApproachMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ApproachCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ApproachAvgAggregateInputType = {
    id?: true
  }

  export type ApproachSumAggregateInputType = {
    id?: true
  }

  export type ApproachMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ApproachMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ApproachCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ApproachAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approach to aggregate.
     */
    where?: ApproachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approaches to fetch.
     */
    orderBy?: ApproachOrderByWithRelationInput | ApproachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApproachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Approaches
    **/
    _count?: true | ApproachCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApproachAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApproachSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApproachMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApproachMaxAggregateInputType
  }

  export type GetApproachAggregateType<T extends ApproachAggregateArgs> = {
        [P in keyof T & keyof AggregateApproach]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApproach[P]>
      : GetScalarType<T[P], AggregateApproach[P]>
  }




  export type ApproachGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApproachWhereInput
    orderBy?: ApproachOrderByWithAggregationInput | ApproachOrderByWithAggregationInput[]
    by: ApproachScalarFieldEnum[] | ApproachScalarFieldEnum
    having?: ApproachScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApproachCountAggregateInputType | true
    _avg?: ApproachAvgAggregateInputType
    _sum?: ApproachSumAggregateInputType
    _min?: ApproachMinAggregateInputType
    _max?: ApproachMaxAggregateInputType
  }

  export type ApproachGroupByOutputType = {
    id: number
    name: string
    _count: ApproachCountAggregateOutputType | null
    _avg: ApproachAvgAggregateOutputType | null
    _sum: ApproachSumAggregateOutputType | null
    _min: ApproachMinAggregateOutputType | null
    _max: ApproachMaxAggregateOutputType | null
  }

  type GetApproachGroupByPayload<T extends ApproachGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApproachGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApproachGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApproachGroupByOutputType[P]>
            : GetScalarType<T[P], ApproachGroupByOutputType[P]>
        }
      >
    >


  export type ApproachSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | Approach$rehabsArgs<ExtArgs>
    _count?: boolean | ApproachCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approach"]>

  export type ApproachSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["approach"]>

  export type ApproachSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ApproachInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | Approach$rehabsArgs<ExtArgs>
    _count?: boolean | ApproachCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApproachIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApproachPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Approach"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["approach"]>
    composites: {}
  }

  type ApproachGetPayload<S extends boolean | null | undefined | ApproachDefaultArgs> = $Result.GetResult<Prisma.$ApproachPayload, S>

  type ApproachCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApproachFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApproachCountAggregateInputType | true
    }

  export interface ApproachDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Approach'], meta: { name: 'Approach' } }
    /**
     * Find zero or one Approach that matches the filter.
     * @param {ApproachFindUniqueArgs} args - Arguments to find a Approach
     * @example
     * // Get one Approach
     * const approach = await prisma.approach.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApproachFindUniqueArgs>(args: SelectSubset<T, ApproachFindUniqueArgs<ExtArgs>>): Prisma__ApproachClient<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Approach that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApproachFindUniqueOrThrowArgs} args - Arguments to find a Approach
     * @example
     * // Get one Approach
     * const approach = await prisma.approach.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApproachFindUniqueOrThrowArgs>(args: SelectSubset<T, ApproachFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApproachClient<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Approach that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproachFindFirstArgs} args - Arguments to find a Approach
     * @example
     * // Get one Approach
     * const approach = await prisma.approach.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApproachFindFirstArgs>(args?: SelectSubset<T, ApproachFindFirstArgs<ExtArgs>>): Prisma__ApproachClient<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Approach that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproachFindFirstOrThrowArgs} args - Arguments to find a Approach
     * @example
     * // Get one Approach
     * const approach = await prisma.approach.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApproachFindFirstOrThrowArgs>(args?: SelectSubset<T, ApproachFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApproachClient<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Approaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproachFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Approaches
     * const approaches = await prisma.approach.findMany()
     * 
     * // Get first 10 Approaches
     * const approaches = await prisma.approach.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approachWithIdOnly = await prisma.approach.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApproachFindManyArgs>(args?: SelectSubset<T, ApproachFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Approach.
     * @param {ApproachCreateArgs} args - Arguments to create a Approach.
     * @example
     * // Create one Approach
     * const Approach = await prisma.approach.create({
     *   data: {
     *     // ... data to create a Approach
     *   }
     * })
     * 
     */
    create<T extends ApproachCreateArgs>(args: SelectSubset<T, ApproachCreateArgs<ExtArgs>>): Prisma__ApproachClient<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Approaches.
     * @param {ApproachCreateManyArgs} args - Arguments to create many Approaches.
     * @example
     * // Create many Approaches
     * const approach = await prisma.approach.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApproachCreateManyArgs>(args?: SelectSubset<T, ApproachCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Approaches and returns the data saved in the database.
     * @param {ApproachCreateManyAndReturnArgs} args - Arguments to create many Approaches.
     * @example
     * // Create many Approaches
     * const approach = await prisma.approach.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Approaches and only return the `id`
     * const approachWithIdOnly = await prisma.approach.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApproachCreateManyAndReturnArgs>(args?: SelectSubset<T, ApproachCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Approach.
     * @param {ApproachDeleteArgs} args - Arguments to delete one Approach.
     * @example
     * // Delete one Approach
     * const Approach = await prisma.approach.delete({
     *   where: {
     *     // ... filter to delete one Approach
     *   }
     * })
     * 
     */
    delete<T extends ApproachDeleteArgs>(args: SelectSubset<T, ApproachDeleteArgs<ExtArgs>>): Prisma__ApproachClient<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Approach.
     * @param {ApproachUpdateArgs} args - Arguments to update one Approach.
     * @example
     * // Update one Approach
     * const approach = await prisma.approach.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApproachUpdateArgs>(args: SelectSubset<T, ApproachUpdateArgs<ExtArgs>>): Prisma__ApproachClient<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Approaches.
     * @param {ApproachDeleteManyArgs} args - Arguments to filter Approaches to delete.
     * @example
     * // Delete a few Approaches
     * const { count } = await prisma.approach.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApproachDeleteManyArgs>(args?: SelectSubset<T, ApproachDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproachUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Approaches
     * const approach = await prisma.approach.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApproachUpdateManyArgs>(args: SelectSubset<T, ApproachUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Approach.
     * @param {ApproachUpsertArgs} args - Arguments to update or create a Approach.
     * @example
     * // Update or create a Approach
     * const approach = await prisma.approach.upsert({
     *   create: {
     *     // ... data to create a Approach
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Approach we want to update
     *   }
     * })
     */
    upsert<T extends ApproachUpsertArgs>(args: SelectSubset<T, ApproachUpsertArgs<ExtArgs>>): Prisma__ApproachClient<$Result.GetResult<Prisma.$ApproachPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Approaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproachCountArgs} args - Arguments to filter Approaches to count.
     * @example
     * // Count the number of Approaches
     * const count = await prisma.approach.count({
     *   where: {
     *     // ... the filter for the Approaches we want to count
     *   }
     * })
    **/
    count<T extends ApproachCountArgs>(
      args?: Subset<T, ApproachCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApproachCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Approach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproachAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApproachAggregateArgs>(args: Subset<T, ApproachAggregateArgs>): Prisma.PrismaPromise<GetApproachAggregateType<T>>

    /**
     * Group by Approach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproachGroupByArgs} args - Group by arguments.
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
      T extends ApproachGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApproachGroupByArgs['orderBy'] }
        : { orderBy?: ApproachGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApproachGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApproachGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Approach model
   */
  readonly fields: ApproachFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Approach.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApproachClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends Approach$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, Approach$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Approach model
   */ 
  interface ApproachFieldRefs {
    readonly id: FieldRef<"Approach", 'Int'>
    readonly name: FieldRef<"Approach", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Approach findUnique
   */
  export type ApproachFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
    /**
     * Filter, which Approach to fetch.
     */
    where: ApproachWhereUniqueInput
  }

  /**
   * Approach findUniqueOrThrow
   */
  export type ApproachFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
    /**
     * Filter, which Approach to fetch.
     */
    where: ApproachWhereUniqueInput
  }

  /**
   * Approach findFirst
   */
  export type ApproachFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
    /**
     * Filter, which Approach to fetch.
     */
    where?: ApproachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approaches to fetch.
     */
    orderBy?: ApproachOrderByWithRelationInput | ApproachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approaches.
     */
    cursor?: ApproachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approaches.
     */
    distinct?: ApproachScalarFieldEnum | ApproachScalarFieldEnum[]
  }

  /**
   * Approach findFirstOrThrow
   */
  export type ApproachFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
    /**
     * Filter, which Approach to fetch.
     */
    where?: ApproachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approaches to fetch.
     */
    orderBy?: ApproachOrderByWithRelationInput | ApproachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approaches.
     */
    cursor?: ApproachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approaches.
     */
    distinct?: ApproachScalarFieldEnum | ApproachScalarFieldEnum[]
  }

  /**
   * Approach findMany
   */
  export type ApproachFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
    /**
     * Filter, which Approaches to fetch.
     */
    where?: ApproachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approaches to fetch.
     */
    orderBy?: ApproachOrderByWithRelationInput | ApproachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Approaches.
     */
    cursor?: ApproachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approaches.
     */
    skip?: number
    distinct?: ApproachScalarFieldEnum | ApproachScalarFieldEnum[]
  }

  /**
   * Approach create
   */
  export type ApproachCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
    /**
     * The data needed to create a Approach.
     */
    data: XOR<ApproachCreateInput, ApproachUncheckedCreateInput>
  }

  /**
   * Approach createMany
   */
  export type ApproachCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Approaches.
     */
    data: ApproachCreateManyInput | ApproachCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Approach createManyAndReturn
   */
  export type ApproachCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Approaches.
     */
    data: ApproachCreateManyInput | ApproachCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Approach update
   */
  export type ApproachUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
    /**
     * The data needed to update a Approach.
     */
    data: XOR<ApproachUpdateInput, ApproachUncheckedUpdateInput>
    /**
     * Choose, which Approach to update.
     */
    where: ApproachWhereUniqueInput
  }

  /**
   * Approach updateMany
   */
  export type ApproachUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Approaches.
     */
    data: XOR<ApproachUpdateManyMutationInput, ApproachUncheckedUpdateManyInput>
    /**
     * Filter which Approaches to update
     */
    where?: ApproachWhereInput
  }

  /**
   * Approach upsert
   */
  export type ApproachUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
    /**
     * The filter to search for the Approach to update in case it exists.
     */
    where: ApproachWhereUniqueInput
    /**
     * In case the Approach found by the `where` argument doesn't exist, create a new Approach with this data.
     */
    create: XOR<ApproachCreateInput, ApproachUncheckedCreateInput>
    /**
     * In case the Approach was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApproachUpdateInput, ApproachUncheckedUpdateInput>
  }

  /**
   * Approach delete
   */
  export type ApproachDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
    /**
     * Filter which Approach to delete.
     */
    where: ApproachWhereUniqueInput
  }

  /**
   * Approach deleteMany
   */
  export type ApproachDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approaches to delete
     */
    where?: ApproachWhereInput
  }

  /**
   * Approach.rehabs
   */
  export type Approach$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * Approach without action
   */
  export type ApproachDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approach
     */
    select?: ApproachSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApproachInclude<ExtArgs> | null
  }


  /**
   * Model PriceRange
   */

  export type AggregatePriceRange = {
    _count: PriceRangeCountAggregateOutputType | null
    _avg: PriceRangeAvgAggregateOutputType | null
    _sum: PriceRangeSumAggregateOutputType | null
    _min: PriceRangeMinAggregateOutputType | null
    _max: PriceRangeMaxAggregateOutputType | null
  }

  export type PriceRangeAvgAggregateOutputType = {
    id: number | null
  }

  export type PriceRangeSumAggregateOutputType = {
    id: number | null
  }

  export type PriceRangeMinAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type PriceRangeMaxAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type PriceRangeCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type PriceRangeAvgAggregateInputType = {
    id?: true
  }

  export type PriceRangeSumAggregateInputType = {
    id?: true
  }

  export type PriceRangeMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type PriceRangeMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type PriceRangeCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type PriceRangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceRange to aggregate.
     */
    where?: PriceRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRanges to fetch.
     */
    orderBy?: PriceRangeOrderByWithRelationInput | PriceRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceRanges
    **/
    _count?: true | PriceRangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceRangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceRangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceRangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceRangeMaxAggregateInputType
  }

  export type GetPriceRangeAggregateType<T extends PriceRangeAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceRange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceRange[P]>
      : GetScalarType<T[P], AggregatePriceRange[P]>
  }




  export type PriceRangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceRangeWhereInput
    orderBy?: PriceRangeOrderByWithAggregationInput | PriceRangeOrderByWithAggregationInput[]
    by: PriceRangeScalarFieldEnum[] | PriceRangeScalarFieldEnum
    having?: PriceRangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceRangeCountAggregateInputType | true
    _avg?: PriceRangeAvgAggregateInputType
    _sum?: PriceRangeSumAggregateInputType
    _min?: PriceRangeMinAggregateInputType
    _max?: PriceRangeMaxAggregateInputType
  }

  export type PriceRangeGroupByOutputType = {
    id: number
    label: string
    _count: PriceRangeCountAggregateOutputType | null
    _avg: PriceRangeAvgAggregateOutputType | null
    _sum: PriceRangeSumAggregateOutputType | null
    _min: PriceRangeMinAggregateOutputType | null
    _max: PriceRangeMaxAggregateOutputType | null
  }

  type GetPriceRangeGroupByPayload<T extends PriceRangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceRangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceRangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceRangeGroupByOutputType[P]>
            : GetScalarType<T[P], PriceRangeGroupByOutputType[P]>
        }
      >
    >


  export type PriceRangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    rehabs?: boolean | PriceRange$rehabsArgs<ExtArgs>
    _count?: boolean | PriceRangeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceRange"]>

  export type PriceRangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["priceRange"]>

  export type PriceRangeSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type PriceRangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | PriceRange$rehabsArgs<ExtArgs>
    _count?: boolean | PriceRangeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PriceRangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PriceRangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceRange"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
    }, ExtArgs["result"]["priceRange"]>
    composites: {}
  }

  type PriceRangeGetPayload<S extends boolean | null | undefined | PriceRangeDefaultArgs> = $Result.GetResult<Prisma.$PriceRangePayload, S>

  type PriceRangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceRangeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceRangeCountAggregateInputType | true
    }

  export interface PriceRangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceRange'], meta: { name: 'PriceRange' } }
    /**
     * Find zero or one PriceRange that matches the filter.
     * @param {PriceRangeFindUniqueArgs} args - Arguments to find a PriceRange
     * @example
     * // Get one PriceRange
     * const priceRange = await prisma.priceRange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceRangeFindUniqueArgs>(args: SelectSubset<T, PriceRangeFindUniqueArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PriceRange that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceRangeFindUniqueOrThrowArgs} args - Arguments to find a PriceRange
     * @example
     * // Get one PriceRange
     * const priceRange = await prisma.priceRange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceRangeFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceRangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PriceRange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeFindFirstArgs} args - Arguments to find a PriceRange
     * @example
     * // Get one PriceRange
     * const priceRange = await prisma.priceRange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceRangeFindFirstArgs>(args?: SelectSubset<T, PriceRangeFindFirstArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PriceRange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeFindFirstOrThrowArgs} args - Arguments to find a PriceRange
     * @example
     * // Get one PriceRange
     * const priceRange = await prisma.priceRange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceRangeFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceRangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PriceRanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceRanges
     * const priceRanges = await prisma.priceRange.findMany()
     * 
     * // Get first 10 PriceRanges
     * const priceRanges = await prisma.priceRange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceRangeWithIdOnly = await prisma.priceRange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceRangeFindManyArgs>(args?: SelectSubset<T, PriceRangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PriceRange.
     * @param {PriceRangeCreateArgs} args - Arguments to create a PriceRange.
     * @example
     * // Create one PriceRange
     * const PriceRange = await prisma.priceRange.create({
     *   data: {
     *     // ... data to create a PriceRange
     *   }
     * })
     * 
     */
    create<T extends PriceRangeCreateArgs>(args: SelectSubset<T, PriceRangeCreateArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PriceRanges.
     * @param {PriceRangeCreateManyArgs} args - Arguments to create many PriceRanges.
     * @example
     * // Create many PriceRanges
     * const priceRange = await prisma.priceRange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceRangeCreateManyArgs>(args?: SelectSubset<T, PriceRangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceRanges and returns the data saved in the database.
     * @param {PriceRangeCreateManyAndReturnArgs} args - Arguments to create many PriceRanges.
     * @example
     * // Create many PriceRanges
     * const priceRange = await prisma.priceRange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceRanges and only return the `id`
     * const priceRangeWithIdOnly = await prisma.priceRange.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceRangeCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceRangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PriceRange.
     * @param {PriceRangeDeleteArgs} args - Arguments to delete one PriceRange.
     * @example
     * // Delete one PriceRange
     * const PriceRange = await prisma.priceRange.delete({
     *   where: {
     *     // ... filter to delete one PriceRange
     *   }
     * })
     * 
     */
    delete<T extends PriceRangeDeleteArgs>(args: SelectSubset<T, PriceRangeDeleteArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PriceRange.
     * @param {PriceRangeUpdateArgs} args - Arguments to update one PriceRange.
     * @example
     * // Update one PriceRange
     * const priceRange = await prisma.priceRange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceRangeUpdateArgs>(args: SelectSubset<T, PriceRangeUpdateArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PriceRanges.
     * @param {PriceRangeDeleteManyArgs} args - Arguments to filter PriceRanges to delete.
     * @example
     * // Delete a few PriceRanges
     * const { count } = await prisma.priceRange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceRangeDeleteManyArgs>(args?: SelectSubset<T, PriceRangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceRanges
     * const priceRange = await prisma.priceRange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceRangeUpdateManyArgs>(args: SelectSubset<T, PriceRangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceRange.
     * @param {PriceRangeUpsertArgs} args - Arguments to update or create a PriceRange.
     * @example
     * // Update or create a PriceRange
     * const priceRange = await prisma.priceRange.upsert({
     *   create: {
     *     // ... data to create a PriceRange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceRange we want to update
     *   }
     * })
     */
    upsert<T extends PriceRangeUpsertArgs>(args: SelectSubset<T, PriceRangeUpsertArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PriceRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeCountArgs} args - Arguments to filter PriceRanges to count.
     * @example
     * // Count the number of PriceRanges
     * const count = await prisma.priceRange.count({
     *   where: {
     *     // ... the filter for the PriceRanges we want to count
     *   }
     * })
    **/
    count<T extends PriceRangeCountArgs>(
      args?: Subset<T, PriceRangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceRangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceRangeAggregateArgs>(args: Subset<T, PriceRangeAggregateArgs>): Prisma.PrismaPromise<GetPriceRangeAggregateType<T>>

    /**
     * Group by PriceRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeGroupByArgs} args - Group by arguments.
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
      T extends PriceRangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceRangeGroupByArgs['orderBy'] }
        : { orderBy?: PriceRangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceRangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceRangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceRange model
   */
  readonly fields: PriceRangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceRange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceRangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends PriceRange$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, PriceRange$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PriceRange model
   */ 
  interface PriceRangeFieldRefs {
    readonly id: FieldRef<"PriceRange", 'Int'>
    readonly label: FieldRef<"PriceRange", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PriceRange findUnique
   */
  export type PriceRangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
    /**
     * Filter, which PriceRange to fetch.
     */
    where: PriceRangeWhereUniqueInput
  }

  /**
   * PriceRange findUniqueOrThrow
   */
  export type PriceRangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
    /**
     * Filter, which PriceRange to fetch.
     */
    where: PriceRangeWhereUniqueInput
  }

  /**
   * PriceRange findFirst
   */
  export type PriceRangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
    /**
     * Filter, which PriceRange to fetch.
     */
    where?: PriceRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRanges to fetch.
     */
    orderBy?: PriceRangeOrderByWithRelationInput | PriceRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceRanges.
     */
    cursor?: PriceRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceRanges.
     */
    distinct?: PriceRangeScalarFieldEnum | PriceRangeScalarFieldEnum[]
  }

  /**
   * PriceRange findFirstOrThrow
   */
  export type PriceRangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
    /**
     * Filter, which PriceRange to fetch.
     */
    where?: PriceRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRanges to fetch.
     */
    orderBy?: PriceRangeOrderByWithRelationInput | PriceRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceRanges.
     */
    cursor?: PriceRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceRanges.
     */
    distinct?: PriceRangeScalarFieldEnum | PriceRangeScalarFieldEnum[]
  }

  /**
   * PriceRange findMany
   */
  export type PriceRangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
    /**
     * Filter, which PriceRanges to fetch.
     */
    where?: PriceRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRanges to fetch.
     */
    orderBy?: PriceRangeOrderByWithRelationInput | PriceRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceRanges.
     */
    cursor?: PriceRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRanges.
     */
    skip?: number
    distinct?: PriceRangeScalarFieldEnum | PriceRangeScalarFieldEnum[]
  }

  /**
   * PriceRange create
   */
  export type PriceRangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceRange.
     */
    data: XOR<PriceRangeCreateInput, PriceRangeUncheckedCreateInput>
  }

  /**
   * PriceRange createMany
   */
  export type PriceRangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceRanges.
     */
    data: PriceRangeCreateManyInput | PriceRangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceRange createManyAndReturn
   */
  export type PriceRangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PriceRanges.
     */
    data: PriceRangeCreateManyInput | PriceRangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceRange update
   */
  export type PriceRangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceRange.
     */
    data: XOR<PriceRangeUpdateInput, PriceRangeUncheckedUpdateInput>
    /**
     * Choose, which PriceRange to update.
     */
    where: PriceRangeWhereUniqueInput
  }

  /**
   * PriceRange updateMany
   */
  export type PriceRangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceRanges.
     */
    data: XOR<PriceRangeUpdateManyMutationInput, PriceRangeUncheckedUpdateManyInput>
    /**
     * Filter which PriceRanges to update
     */
    where?: PriceRangeWhereInput
  }

  /**
   * PriceRange upsert
   */
  export type PriceRangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceRange to update in case it exists.
     */
    where: PriceRangeWhereUniqueInput
    /**
     * In case the PriceRange found by the `where` argument doesn't exist, create a new PriceRange with this data.
     */
    create: XOR<PriceRangeCreateInput, PriceRangeUncheckedCreateInput>
    /**
     * In case the PriceRange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceRangeUpdateInput, PriceRangeUncheckedUpdateInput>
  }

  /**
   * PriceRange delete
   */
  export type PriceRangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
    /**
     * Filter which PriceRange to delete.
     */
    where: PriceRangeWhereUniqueInput
  }

  /**
   * PriceRange deleteMany
   */
  export type PriceRangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceRanges to delete
     */
    where?: PriceRangeWhereInput
  }

  /**
   * PriceRange.rehabs
   */
  export type PriceRange$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * PriceRange without action
   */
  export type PriceRangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRangeInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    name: string
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | Country$rehabsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | Country$rehabsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends Country$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, Country$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Country model
   */ 
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }

  /**
   * Country.rehabs
   */
  export type Country$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateAvgAggregateOutputType = {
    id: number | null
  }

  export type StateSumAggregateOutputType = {
    id: number | null
  }

  export type StateMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StateAvgAggregateInputType = {
    id?: true
  }

  export type StateSumAggregateInputType = {
    id?: true
  }

  export type StateMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _avg?: StateAvgAggregateInputType
    _sum?: StateSumAggregateInputType
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: number
    name: string
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rehabs?: boolean | State$rehabsArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type StateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type StateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehabs?: boolean | State$rehabsArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {
      rehabs: Prisma.$RehabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many States and returns the data saved in the database.
     * @param {StateCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many States and only return the `id`
     * const stateWithIdOnly = await prisma.state.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateCreateManyAndReturnArgs>(args?: SelectSubset<T, StateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
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
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehabs<T extends State$rehabsArgs<ExtArgs> = {}>(args?: Subset<T, State$rehabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the State model
   */ 
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'Int'>
    readonly name: FieldRef<"State", 'String'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State createManyAndReturn
   */
  export type StateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
  }

  /**
   * State.rehabs
   */
  export type State$rehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehab
     */
    select?: RehabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabInclude<ExtArgs> | null
    where?: RehabWhereInput
    orderBy?: RehabOrderByWithRelationInput | RehabOrderByWithRelationInput[]
    cursor?: RehabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabScalarFieldEnum | RehabScalarFieldEnum[]
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    rehabId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    rehabId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    content: string | null
    rating: number | null
    createdAt: Date | null
    userId: number | null
    rehabId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    content: string | null
    rating: number | null
    createdAt: Date | null
    userId: number | null
    rehabId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    content: number
    rating: number
    createdAt: number
    userId: number
    rehabId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    rehabId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    rehabId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    content?: true
    rating?: true
    createdAt?: true
    userId?: true
    rehabId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    content?: true
    rating?: true
    createdAt?: true
    userId?: true
    rehabId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    content?: true
    rating?: true
    createdAt?: true
    userId?: true
    rehabId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    content: string
    rating: number
    createdAt: Date
    userId: number
    rehabId: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    userId?: boolean
    rehabId?: boolean
    rehab?: boolean | RehabDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    userId?: boolean
    rehabId?: boolean
    rehab?: boolean | RehabDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    userId?: boolean
    rehabId?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehab?: boolean | RehabDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rehab?: boolean | RehabDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      rehab: Prisma.$RehabPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      rating: number
      createdAt: Date
      userId: number
      rehabId: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rehab<T extends RehabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RehabDefaultArgs<ExtArgs>>): Prisma__RehabClient<$Result.GetResult<Prisma.$RehabPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly content: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly rehabId: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model NPIRehabs
   */

  export type AggregateNPIRehabs = {
    _count: NPIRehabsCountAggregateOutputType | null
    _min: NPIRehabsMinAggregateOutputType | null
    _max: NPIRehabsMaxAggregateOutputType | null
  }

  export type NPIRehabsMinAggregateOutputType = {
    npi_number: string | null
    organization_name: string | null
    address: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    phone: string | null
    taxonomy_code: string | null
    last_updated: Date | null
  }

  export type NPIRehabsMaxAggregateOutputType = {
    npi_number: string | null
    organization_name: string | null
    address: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    phone: string | null
    taxonomy_code: string | null
    last_updated: Date | null
  }

  export type NPIRehabsCountAggregateOutputType = {
    npi_number: number
    organization_name: number
    address: number
    city: number
    state: number
    postal_code: number
    phone: number
    taxonomy_code: number
    last_updated: number
    _all: number
  }


  export type NPIRehabsMinAggregateInputType = {
    npi_number?: true
    organization_name?: true
    address?: true
    city?: true
    state?: true
    postal_code?: true
    phone?: true
    taxonomy_code?: true
    last_updated?: true
  }

  export type NPIRehabsMaxAggregateInputType = {
    npi_number?: true
    organization_name?: true
    address?: true
    city?: true
    state?: true
    postal_code?: true
    phone?: true
    taxonomy_code?: true
    last_updated?: true
  }

  export type NPIRehabsCountAggregateInputType = {
    npi_number?: true
    organization_name?: true
    address?: true
    city?: true
    state?: true
    postal_code?: true
    phone?: true
    taxonomy_code?: true
    last_updated?: true
    _all?: true
  }

  export type NPIRehabsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NPIRehabs to aggregate.
     */
    where?: NPIRehabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPIRehabs to fetch.
     */
    orderBy?: NPIRehabsOrderByWithRelationInput | NPIRehabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NPIRehabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPIRehabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPIRehabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NPIRehabs
    **/
    _count?: true | NPIRehabsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NPIRehabsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NPIRehabsMaxAggregateInputType
  }

  export type GetNPIRehabsAggregateType<T extends NPIRehabsAggregateArgs> = {
        [P in keyof T & keyof AggregateNPIRehabs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNPIRehabs[P]>
      : GetScalarType<T[P], AggregateNPIRehabs[P]>
  }




  export type NPIRehabsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NPIRehabsWhereInput
    orderBy?: NPIRehabsOrderByWithAggregationInput | NPIRehabsOrderByWithAggregationInput[]
    by: NPIRehabsScalarFieldEnum[] | NPIRehabsScalarFieldEnum
    having?: NPIRehabsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NPIRehabsCountAggregateInputType | true
    _min?: NPIRehabsMinAggregateInputType
    _max?: NPIRehabsMaxAggregateInputType
  }

  export type NPIRehabsGroupByOutputType = {
    npi_number: string
    organization_name: string
    address: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    phone: string | null
    taxonomy_code: string | null
    last_updated: Date | null
    _count: NPIRehabsCountAggregateOutputType | null
    _min: NPIRehabsMinAggregateOutputType | null
    _max: NPIRehabsMaxAggregateOutputType | null
  }

  type GetNPIRehabsGroupByPayload<T extends NPIRehabsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NPIRehabsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NPIRehabsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NPIRehabsGroupByOutputType[P]>
            : GetScalarType<T[P], NPIRehabsGroupByOutputType[P]>
        }
      >
    >


  export type NPIRehabsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    npi_number?: boolean
    organization_name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    phone?: boolean
    taxonomy_code?: boolean
    last_updated?: boolean
  }, ExtArgs["result"]["nPIRehabs"]>

  export type NPIRehabsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    npi_number?: boolean
    organization_name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    phone?: boolean
    taxonomy_code?: boolean
    last_updated?: boolean
  }, ExtArgs["result"]["nPIRehabs"]>

  export type NPIRehabsSelectScalar = {
    npi_number?: boolean
    organization_name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    phone?: boolean
    taxonomy_code?: boolean
    last_updated?: boolean
  }


  export type $NPIRehabsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NPIRehabs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      npi_number: string
      organization_name: string
      address: string | null
      city: string | null
      state: string | null
      postal_code: string | null
      phone: string | null
      taxonomy_code: string | null
      last_updated: Date | null
    }, ExtArgs["result"]["nPIRehabs"]>
    composites: {}
  }

  type NPIRehabsGetPayload<S extends boolean | null | undefined | NPIRehabsDefaultArgs> = $Result.GetResult<Prisma.$NPIRehabsPayload, S>

  type NPIRehabsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NPIRehabsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NPIRehabsCountAggregateInputType | true
    }

  export interface NPIRehabsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NPIRehabs'], meta: { name: 'NPIRehabs' } }
    /**
     * Find zero or one NPIRehabs that matches the filter.
     * @param {NPIRehabsFindUniqueArgs} args - Arguments to find a NPIRehabs
     * @example
     * // Get one NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NPIRehabsFindUniqueArgs>(args: SelectSubset<T, NPIRehabsFindUniqueArgs<ExtArgs>>): Prisma__NPIRehabsClient<$Result.GetResult<Prisma.$NPIRehabsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NPIRehabs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NPIRehabsFindUniqueOrThrowArgs} args - Arguments to find a NPIRehabs
     * @example
     * // Get one NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NPIRehabsFindUniqueOrThrowArgs>(args: SelectSubset<T, NPIRehabsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NPIRehabsClient<$Result.GetResult<Prisma.$NPIRehabsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NPIRehabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPIRehabsFindFirstArgs} args - Arguments to find a NPIRehabs
     * @example
     * // Get one NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NPIRehabsFindFirstArgs>(args?: SelectSubset<T, NPIRehabsFindFirstArgs<ExtArgs>>): Prisma__NPIRehabsClient<$Result.GetResult<Prisma.$NPIRehabsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NPIRehabs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPIRehabsFindFirstOrThrowArgs} args - Arguments to find a NPIRehabs
     * @example
     * // Get one NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NPIRehabsFindFirstOrThrowArgs>(args?: SelectSubset<T, NPIRehabsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NPIRehabsClient<$Result.GetResult<Prisma.$NPIRehabsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NPIRehabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPIRehabsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.findMany()
     * 
     * // Get first 10 NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.findMany({ take: 10 })
     * 
     * // Only select the `npi_number`
     * const nPIRehabsWithNpi_numberOnly = await prisma.nPIRehabs.findMany({ select: { npi_number: true } })
     * 
     */
    findMany<T extends NPIRehabsFindManyArgs>(args?: SelectSubset<T, NPIRehabsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPIRehabsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NPIRehabs.
     * @param {NPIRehabsCreateArgs} args - Arguments to create a NPIRehabs.
     * @example
     * // Create one NPIRehabs
     * const NPIRehabs = await prisma.nPIRehabs.create({
     *   data: {
     *     // ... data to create a NPIRehabs
     *   }
     * })
     * 
     */
    create<T extends NPIRehabsCreateArgs>(args: SelectSubset<T, NPIRehabsCreateArgs<ExtArgs>>): Prisma__NPIRehabsClient<$Result.GetResult<Prisma.$NPIRehabsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NPIRehabs.
     * @param {NPIRehabsCreateManyArgs} args - Arguments to create many NPIRehabs.
     * @example
     * // Create many NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NPIRehabsCreateManyArgs>(args?: SelectSubset<T, NPIRehabsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NPIRehabs and returns the data saved in the database.
     * @param {NPIRehabsCreateManyAndReturnArgs} args - Arguments to create many NPIRehabs.
     * @example
     * // Create many NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NPIRehabs and only return the `npi_number`
     * const nPIRehabsWithNpi_numberOnly = await prisma.nPIRehabs.createManyAndReturn({ 
     *   select: { npi_number: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NPIRehabsCreateManyAndReturnArgs>(args?: SelectSubset<T, NPIRehabsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPIRehabsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NPIRehabs.
     * @param {NPIRehabsDeleteArgs} args - Arguments to delete one NPIRehabs.
     * @example
     * // Delete one NPIRehabs
     * const NPIRehabs = await prisma.nPIRehabs.delete({
     *   where: {
     *     // ... filter to delete one NPIRehabs
     *   }
     * })
     * 
     */
    delete<T extends NPIRehabsDeleteArgs>(args: SelectSubset<T, NPIRehabsDeleteArgs<ExtArgs>>): Prisma__NPIRehabsClient<$Result.GetResult<Prisma.$NPIRehabsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NPIRehabs.
     * @param {NPIRehabsUpdateArgs} args - Arguments to update one NPIRehabs.
     * @example
     * // Update one NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NPIRehabsUpdateArgs>(args: SelectSubset<T, NPIRehabsUpdateArgs<ExtArgs>>): Prisma__NPIRehabsClient<$Result.GetResult<Prisma.$NPIRehabsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NPIRehabs.
     * @param {NPIRehabsDeleteManyArgs} args - Arguments to filter NPIRehabs to delete.
     * @example
     * // Delete a few NPIRehabs
     * const { count } = await prisma.nPIRehabs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NPIRehabsDeleteManyArgs>(args?: SelectSubset<T, NPIRehabsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NPIRehabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPIRehabsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NPIRehabsUpdateManyArgs>(args: SelectSubset<T, NPIRehabsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NPIRehabs.
     * @param {NPIRehabsUpsertArgs} args - Arguments to update or create a NPIRehabs.
     * @example
     * // Update or create a NPIRehabs
     * const nPIRehabs = await prisma.nPIRehabs.upsert({
     *   create: {
     *     // ... data to create a NPIRehabs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NPIRehabs we want to update
     *   }
     * })
     */
    upsert<T extends NPIRehabsUpsertArgs>(args: SelectSubset<T, NPIRehabsUpsertArgs<ExtArgs>>): Prisma__NPIRehabsClient<$Result.GetResult<Prisma.$NPIRehabsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NPIRehabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPIRehabsCountArgs} args - Arguments to filter NPIRehabs to count.
     * @example
     * // Count the number of NPIRehabs
     * const count = await prisma.nPIRehabs.count({
     *   where: {
     *     // ... the filter for the NPIRehabs we want to count
     *   }
     * })
    **/
    count<T extends NPIRehabsCountArgs>(
      args?: Subset<T, NPIRehabsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NPIRehabsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NPIRehabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPIRehabsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NPIRehabsAggregateArgs>(args: Subset<T, NPIRehabsAggregateArgs>): Prisma.PrismaPromise<GetNPIRehabsAggregateType<T>>

    /**
     * Group by NPIRehabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPIRehabsGroupByArgs} args - Group by arguments.
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
      T extends NPIRehabsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NPIRehabsGroupByArgs['orderBy'] }
        : { orderBy?: NPIRehabsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NPIRehabsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNPIRehabsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NPIRehabs model
   */
  readonly fields: NPIRehabsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NPIRehabs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NPIRehabsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NPIRehabs model
   */ 
  interface NPIRehabsFieldRefs {
    readonly npi_number: FieldRef<"NPIRehabs", 'String'>
    readonly organization_name: FieldRef<"NPIRehabs", 'String'>
    readonly address: FieldRef<"NPIRehabs", 'String'>
    readonly city: FieldRef<"NPIRehabs", 'String'>
    readonly state: FieldRef<"NPIRehabs", 'String'>
    readonly postal_code: FieldRef<"NPIRehabs", 'String'>
    readonly phone: FieldRef<"NPIRehabs", 'String'>
    readonly taxonomy_code: FieldRef<"NPIRehabs", 'String'>
    readonly last_updated: FieldRef<"NPIRehabs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NPIRehabs findUnique
   */
  export type NPIRehabsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelect<ExtArgs> | null
    /**
     * Filter, which NPIRehabs to fetch.
     */
    where: NPIRehabsWhereUniqueInput
  }

  /**
   * NPIRehabs findUniqueOrThrow
   */
  export type NPIRehabsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelect<ExtArgs> | null
    /**
     * Filter, which NPIRehabs to fetch.
     */
    where: NPIRehabsWhereUniqueInput
  }

  /**
   * NPIRehabs findFirst
   */
  export type NPIRehabsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelect<ExtArgs> | null
    /**
     * Filter, which NPIRehabs to fetch.
     */
    where?: NPIRehabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPIRehabs to fetch.
     */
    orderBy?: NPIRehabsOrderByWithRelationInput | NPIRehabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NPIRehabs.
     */
    cursor?: NPIRehabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPIRehabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPIRehabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NPIRehabs.
     */
    distinct?: NPIRehabsScalarFieldEnum | NPIRehabsScalarFieldEnum[]
  }

  /**
   * NPIRehabs findFirstOrThrow
   */
  export type NPIRehabsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelect<ExtArgs> | null
    /**
     * Filter, which NPIRehabs to fetch.
     */
    where?: NPIRehabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPIRehabs to fetch.
     */
    orderBy?: NPIRehabsOrderByWithRelationInput | NPIRehabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NPIRehabs.
     */
    cursor?: NPIRehabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPIRehabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPIRehabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NPIRehabs.
     */
    distinct?: NPIRehabsScalarFieldEnum | NPIRehabsScalarFieldEnum[]
  }

  /**
   * NPIRehabs findMany
   */
  export type NPIRehabsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelect<ExtArgs> | null
    /**
     * Filter, which NPIRehabs to fetch.
     */
    where?: NPIRehabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPIRehabs to fetch.
     */
    orderBy?: NPIRehabsOrderByWithRelationInput | NPIRehabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NPIRehabs.
     */
    cursor?: NPIRehabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPIRehabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPIRehabs.
     */
    skip?: number
    distinct?: NPIRehabsScalarFieldEnum | NPIRehabsScalarFieldEnum[]
  }

  /**
   * NPIRehabs create
   */
  export type NPIRehabsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelect<ExtArgs> | null
    /**
     * The data needed to create a NPIRehabs.
     */
    data: XOR<NPIRehabsCreateInput, NPIRehabsUncheckedCreateInput>
  }

  /**
   * NPIRehabs createMany
   */
  export type NPIRehabsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NPIRehabs.
     */
    data: NPIRehabsCreateManyInput | NPIRehabsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NPIRehabs createManyAndReturn
   */
  export type NPIRehabsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NPIRehabs.
     */
    data: NPIRehabsCreateManyInput | NPIRehabsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NPIRehabs update
   */
  export type NPIRehabsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelect<ExtArgs> | null
    /**
     * The data needed to update a NPIRehabs.
     */
    data: XOR<NPIRehabsUpdateInput, NPIRehabsUncheckedUpdateInput>
    /**
     * Choose, which NPIRehabs to update.
     */
    where: NPIRehabsWhereUniqueInput
  }

  /**
   * NPIRehabs updateMany
   */
  export type NPIRehabsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NPIRehabs.
     */
    data: XOR<NPIRehabsUpdateManyMutationInput, NPIRehabsUncheckedUpdateManyInput>
    /**
     * Filter which NPIRehabs to update
     */
    where?: NPIRehabsWhereInput
  }

  /**
   * NPIRehabs upsert
   */
  export type NPIRehabsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelect<ExtArgs> | null
    /**
     * The filter to search for the NPIRehabs to update in case it exists.
     */
    where: NPIRehabsWhereUniqueInput
    /**
     * In case the NPIRehabs found by the `where` argument doesn't exist, create a new NPIRehabs with this data.
     */
    create: XOR<NPIRehabsCreateInput, NPIRehabsUncheckedCreateInput>
    /**
     * In case the NPIRehabs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NPIRehabsUpdateInput, NPIRehabsUncheckedUpdateInput>
  }

  /**
   * NPIRehabs delete
   */
  export type NPIRehabsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelect<ExtArgs> | null
    /**
     * Filter which NPIRehabs to delete.
     */
    where: NPIRehabsWhereUniqueInput
  }

  /**
   * NPIRehabs deleteMany
   */
  export type NPIRehabsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NPIRehabs to delete
     */
    where?: NPIRehabsWhereInput
  }

  /**
   * NPIRehabs without action
   */
  export type NPIRehabsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPIRehabs
     */
    select?: NPIRehabsSelect<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RehabScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    description: 'description',
    phone: 'phone',
    last_updated_nppes: 'last_updated_nppes',
    website: 'website',
    userId: 'userId'
  };

  export type RehabScalarFieldEnum = (typeof RehabScalarFieldEnum)[keyof typeof RehabScalarFieldEnum]


  export const AmenityScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AmenityScalarFieldEnum = (typeof AmenityScalarFieldEnum)[keyof typeof AmenityScalarFieldEnum]


  export const LevelOfCareScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LevelOfCareScalarFieldEnum = (typeof LevelOfCareScalarFieldEnum)[keyof typeof LevelOfCareScalarFieldEnum]


  export const ConditionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ConditionScalarFieldEnum = (typeof ConditionScalarFieldEnum)[keyof typeof ConditionScalarFieldEnum]


  export const TreatmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TreatmentScalarFieldEnum = (typeof TreatmentScalarFieldEnum)[keyof typeof TreatmentScalarFieldEnum]


  export const InsuranceProviderScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type InsuranceProviderScalarFieldEnum = (typeof InsuranceProviderScalarFieldEnum)[keyof typeof InsuranceProviderScalarFieldEnum]


  export const ClienteleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ClienteleScalarFieldEnum = (typeof ClienteleScalarFieldEnum)[keyof typeof ClienteleScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const ApproachScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ApproachScalarFieldEnum = (typeof ApproachScalarFieldEnum)[keyof typeof ApproachScalarFieldEnum]


  export const PriceRangeScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type PriceRangeScalarFieldEnum = (typeof PriceRangeScalarFieldEnum)[keyof typeof PriceRangeScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    content: 'content',
    rating: 'rating',
    createdAt: 'createdAt',
    userId: 'userId',
    rehabId: 'rehabId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const NPIRehabsScalarFieldEnum: {
    npi_number: 'npi_number',
    organization_name: 'organization_name',
    address: 'address',
    city: 'city',
    state: 'state',
    postal_code: 'postal_code',
    phone: 'phone',
    taxonomy_code: 'taxonomy_code',
    last_updated: 'last_updated'
  };

  export type NPIRehabsScalarFieldEnum = (typeof NPIRehabsScalarFieldEnum)[keyof typeof NPIRehabsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    rehabs?: RehabListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    rehabs?: RehabListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
  }

  export type RehabWhereInput = {
    AND?: RehabWhereInput | RehabWhereInput[]
    OR?: RehabWhereInput[]
    NOT?: RehabWhereInput | RehabWhereInput[]
    id?: IntFilter<"Rehab"> | number
    name?: StringFilter<"Rehab"> | string
    address?: StringNullableFilter<"Rehab"> | string | null
    description?: StringNullableFilter<"Rehab"> | string | null
    phone?: StringNullableFilter<"Rehab"> | string | null
    last_updated_nppes?: DateTimeNullableFilter<"Rehab"> | Date | string | null
    website?: StringNullableFilter<"Rehab"> | string | null
    userId?: IntNullableFilter<"Rehab"> | number | null
    user?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    reviews?: ReviewListRelationFilter
    amenities?: AmenityListRelationFilter
    approaches?: ApproachListRelationFilter
    clientele?: ClienteleListRelationFilter
    conditions?: ConditionListRelationFilter
    countries?: CountryListRelationFilter
    insuranceProviders?: InsuranceProviderListRelationFilter
    levels_of_care?: LevelOfCareListRelationFilter
    priceRanges?: PriceRangeListRelationFilter
    settings?: SettingListRelationFilter
    states?: StateListRelationFilter
    treatments?: TreatmentListRelationFilter
  }

  export type RehabOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    last_updated_nppes?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    amenities?: AmenityOrderByRelationAggregateInput
    approaches?: ApproachOrderByRelationAggregateInput
    clientele?: ClienteleOrderByRelationAggregateInput
    conditions?: ConditionOrderByRelationAggregateInput
    countries?: CountryOrderByRelationAggregateInput
    insuranceProviders?: InsuranceProviderOrderByRelationAggregateInput
    levels_of_care?: LevelOfCareOrderByRelationAggregateInput
    priceRanges?: PriceRangeOrderByRelationAggregateInput
    settings?: SettingOrderByRelationAggregateInput
    states?: StateOrderByRelationAggregateInput
    treatments?: TreatmentOrderByRelationAggregateInput
  }

  export type RehabWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RehabWhereInput | RehabWhereInput[]
    OR?: RehabWhereInput[]
    NOT?: RehabWhereInput | RehabWhereInput[]
    name?: StringFilter<"Rehab"> | string
    address?: StringNullableFilter<"Rehab"> | string | null
    description?: StringNullableFilter<"Rehab"> | string | null
    phone?: StringNullableFilter<"Rehab"> | string | null
    last_updated_nppes?: DateTimeNullableFilter<"Rehab"> | Date | string | null
    website?: StringNullableFilter<"Rehab"> | string | null
    userId?: IntNullableFilter<"Rehab"> | number | null
    user?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    reviews?: ReviewListRelationFilter
    amenities?: AmenityListRelationFilter
    approaches?: ApproachListRelationFilter
    clientele?: ClienteleListRelationFilter
    conditions?: ConditionListRelationFilter
    countries?: CountryListRelationFilter
    insuranceProviders?: InsuranceProviderListRelationFilter
    levels_of_care?: LevelOfCareListRelationFilter
    priceRanges?: PriceRangeListRelationFilter
    settings?: SettingListRelationFilter
    states?: StateListRelationFilter
    treatments?: TreatmentListRelationFilter
  }, "id">

  export type RehabOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    last_updated_nppes?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: RehabCountOrderByAggregateInput
    _avg?: RehabAvgOrderByAggregateInput
    _max?: RehabMaxOrderByAggregateInput
    _min?: RehabMinOrderByAggregateInput
    _sum?: RehabSumOrderByAggregateInput
  }

  export type RehabScalarWhereWithAggregatesInput = {
    AND?: RehabScalarWhereWithAggregatesInput | RehabScalarWhereWithAggregatesInput[]
    OR?: RehabScalarWhereWithAggregatesInput[]
    NOT?: RehabScalarWhereWithAggregatesInput | RehabScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rehab"> | number
    name?: StringWithAggregatesFilter<"Rehab"> | string
    address?: StringNullableWithAggregatesFilter<"Rehab"> | string | null
    description?: StringNullableWithAggregatesFilter<"Rehab"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Rehab"> | string | null
    last_updated_nppes?: DateTimeNullableWithAggregatesFilter<"Rehab"> | Date | string | null
    website?: StringNullableWithAggregatesFilter<"Rehab"> | string | null
    userId?: IntNullableWithAggregatesFilter<"Rehab"> | number | null
  }

  export type AmenityWhereInput = {
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    id?: IntFilter<"Amenity"> | number
    name?: StringFilter<"Amenity"> | string
    rehabs?: RehabListRelationFilter
  }

  export type AmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type AmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "name">

  export type AmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AmenityCountOrderByAggregateInput
    _avg?: AmenityAvgOrderByAggregateInput
    _max?: AmenityMaxOrderByAggregateInput
    _min?: AmenityMinOrderByAggregateInput
    _sum?: AmenitySumOrderByAggregateInput
  }

  export type AmenityScalarWhereWithAggregatesInput = {
    AND?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    OR?: AmenityScalarWhereWithAggregatesInput[]
    NOT?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Amenity"> | number
    name?: StringWithAggregatesFilter<"Amenity"> | string
  }

  export type LevelOfCareWhereInput = {
    AND?: LevelOfCareWhereInput | LevelOfCareWhereInput[]
    OR?: LevelOfCareWhereInput[]
    NOT?: LevelOfCareWhereInput | LevelOfCareWhereInput[]
    id?: IntFilter<"LevelOfCare"> | number
    name?: StringFilter<"LevelOfCare"> | string
    rehabs?: RehabListRelationFilter
  }

  export type LevelOfCareOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type LevelOfCareWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LevelOfCareWhereInput | LevelOfCareWhereInput[]
    OR?: LevelOfCareWhereInput[]
    NOT?: LevelOfCareWhereInput | LevelOfCareWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "name">

  export type LevelOfCareOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LevelOfCareCountOrderByAggregateInput
    _avg?: LevelOfCareAvgOrderByAggregateInput
    _max?: LevelOfCareMaxOrderByAggregateInput
    _min?: LevelOfCareMinOrderByAggregateInput
    _sum?: LevelOfCareSumOrderByAggregateInput
  }

  export type LevelOfCareScalarWhereWithAggregatesInput = {
    AND?: LevelOfCareScalarWhereWithAggregatesInput | LevelOfCareScalarWhereWithAggregatesInput[]
    OR?: LevelOfCareScalarWhereWithAggregatesInput[]
    NOT?: LevelOfCareScalarWhereWithAggregatesInput | LevelOfCareScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LevelOfCare"> | number
    name?: StringWithAggregatesFilter<"LevelOfCare"> | string
  }

  export type ConditionWhereInput = {
    AND?: ConditionWhereInput | ConditionWhereInput[]
    OR?: ConditionWhereInput[]
    NOT?: ConditionWhereInput | ConditionWhereInput[]
    id?: IntFilter<"Condition"> | number
    name?: StringFilter<"Condition"> | string
    rehabs?: RehabListRelationFilter
  }

  export type ConditionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type ConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ConditionWhereInput | ConditionWhereInput[]
    OR?: ConditionWhereInput[]
    NOT?: ConditionWhereInput | ConditionWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "name">

  export type ConditionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ConditionCountOrderByAggregateInput
    _avg?: ConditionAvgOrderByAggregateInput
    _max?: ConditionMaxOrderByAggregateInput
    _min?: ConditionMinOrderByAggregateInput
    _sum?: ConditionSumOrderByAggregateInput
  }

  export type ConditionScalarWhereWithAggregatesInput = {
    AND?: ConditionScalarWhereWithAggregatesInput | ConditionScalarWhereWithAggregatesInput[]
    OR?: ConditionScalarWhereWithAggregatesInput[]
    NOT?: ConditionScalarWhereWithAggregatesInput | ConditionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Condition"> | number
    name?: StringWithAggregatesFilter<"Condition"> | string
  }

  export type TreatmentWhereInput = {
    AND?: TreatmentWhereInput | TreatmentWhereInput[]
    OR?: TreatmentWhereInput[]
    NOT?: TreatmentWhereInput | TreatmentWhereInput[]
    id?: IntFilter<"Treatment"> | number
    name?: StringFilter<"Treatment"> | string
    rehabs?: RehabListRelationFilter
  }

  export type TreatmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type TreatmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TreatmentWhereInput | TreatmentWhereInput[]
    OR?: TreatmentWhereInput[]
    NOT?: TreatmentWhereInput | TreatmentWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "name">

  export type TreatmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TreatmentCountOrderByAggregateInput
    _avg?: TreatmentAvgOrderByAggregateInput
    _max?: TreatmentMaxOrderByAggregateInput
    _min?: TreatmentMinOrderByAggregateInput
    _sum?: TreatmentSumOrderByAggregateInput
  }

  export type TreatmentScalarWhereWithAggregatesInput = {
    AND?: TreatmentScalarWhereWithAggregatesInput | TreatmentScalarWhereWithAggregatesInput[]
    OR?: TreatmentScalarWhereWithAggregatesInput[]
    NOT?: TreatmentScalarWhereWithAggregatesInput | TreatmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Treatment"> | number
    name?: StringWithAggregatesFilter<"Treatment"> | string
  }

  export type InsuranceProviderWhereInput = {
    AND?: InsuranceProviderWhereInput | InsuranceProviderWhereInput[]
    OR?: InsuranceProviderWhereInput[]
    NOT?: InsuranceProviderWhereInput | InsuranceProviderWhereInput[]
    id?: IntFilter<"InsuranceProvider"> | number
    name?: StringFilter<"InsuranceProvider"> | string
    rehabs?: RehabListRelationFilter
  }

  export type InsuranceProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type InsuranceProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: InsuranceProviderWhereInput | InsuranceProviderWhereInput[]
    OR?: InsuranceProviderWhereInput[]
    NOT?: InsuranceProviderWhereInput | InsuranceProviderWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "name">

  export type InsuranceProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: InsuranceProviderCountOrderByAggregateInput
    _avg?: InsuranceProviderAvgOrderByAggregateInput
    _max?: InsuranceProviderMaxOrderByAggregateInput
    _min?: InsuranceProviderMinOrderByAggregateInput
    _sum?: InsuranceProviderSumOrderByAggregateInput
  }

  export type InsuranceProviderScalarWhereWithAggregatesInput = {
    AND?: InsuranceProviderScalarWhereWithAggregatesInput | InsuranceProviderScalarWhereWithAggregatesInput[]
    OR?: InsuranceProviderScalarWhereWithAggregatesInput[]
    NOT?: InsuranceProviderScalarWhereWithAggregatesInput | InsuranceProviderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InsuranceProvider"> | number
    name?: StringWithAggregatesFilter<"InsuranceProvider"> | string
  }

  export type ClienteleWhereInput = {
    AND?: ClienteleWhereInput | ClienteleWhereInput[]
    OR?: ClienteleWhereInput[]
    NOT?: ClienteleWhereInput | ClienteleWhereInput[]
    id?: IntFilter<"Clientele"> | number
    name?: StringFilter<"Clientele"> | string
    rehabs?: RehabListRelationFilter
  }

  export type ClienteleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type ClienteleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ClienteleWhereInput | ClienteleWhereInput[]
    OR?: ClienteleWhereInput[]
    NOT?: ClienteleWhereInput | ClienteleWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "name">

  export type ClienteleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ClienteleCountOrderByAggregateInput
    _avg?: ClienteleAvgOrderByAggregateInput
    _max?: ClienteleMaxOrderByAggregateInput
    _min?: ClienteleMinOrderByAggregateInput
    _sum?: ClienteleSumOrderByAggregateInput
  }

  export type ClienteleScalarWhereWithAggregatesInput = {
    AND?: ClienteleScalarWhereWithAggregatesInput | ClienteleScalarWhereWithAggregatesInput[]
    OR?: ClienteleScalarWhereWithAggregatesInput[]
    NOT?: ClienteleScalarWhereWithAggregatesInput | ClienteleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clientele"> | number
    name?: StringWithAggregatesFilter<"Clientele"> | string
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: IntFilter<"Setting"> | number
    name?: StringFilter<"Setting"> | string
    rehabs?: RehabListRelationFilter
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "name">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _avg?: SettingAvgOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
    _sum?: SettingSumOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Setting"> | number
    name?: StringWithAggregatesFilter<"Setting"> | string
  }

  export type ApproachWhereInput = {
    AND?: ApproachWhereInput | ApproachWhereInput[]
    OR?: ApproachWhereInput[]
    NOT?: ApproachWhereInput | ApproachWhereInput[]
    id?: IntFilter<"Approach"> | number
    name?: StringFilter<"Approach"> | string
    rehabs?: RehabListRelationFilter
  }

  export type ApproachOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type ApproachWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ApproachWhereInput | ApproachWhereInput[]
    OR?: ApproachWhereInput[]
    NOT?: ApproachWhereInput | ApproachWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "name">

  export type ApproachOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ApproachCountOrderByAggregateInput
    _avg?: ApproachAvgOrderByAggregateInput
    _max?: ApproachMaxOrderByAggregateInput
    _min?: ApproachMinOrderByAggregateInput
    _sum?: ApproachSumOrderByAggregateInput
  }

  export type ApproachScalarWhereWithAggregatesInput = {
    AND?: ApproachScalarWhereWithAggregatesInput | ApproachScalarWhereWithAggregatesInput[]
    OR?: ApproachScalarWhereWithAggregatesInput[]
    NOT?: ApproachScalarWhereWithAggregatesInput | ApproachScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Approach"> | number
    name?: StringWithAggregatesFilter<"Approach"> | string
  }

  export type PriceRangeWhereInput = {
    AND?: PriceRangeWhereInput | PriceRangeWhereInput[]
    OR?: PriceRangeWhereInput[]
    NOT?: PriceRangeWhereInput | PriceRangeWhereInput[]
    id?: IntFilter<"PriceRange"> | number
    label?: StringFilter<"PriceRange"> | string
    rehabs?: RehabListRelationFilter
  }

  export type PriceRangeOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type PriceRangeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    label?: string
    AND?: PriceRangeWhereInput | PriceRangeWhereInput[]
    OR?: PriceRangeWhereInput[]
    NOT?: PriceRangeWhereInput | PriceRangeWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "label">

  export type PriceRangeOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: PriceRangeCountOrderByAggregateInput
    _avg?: PriceRangeAvgOrderByAggregateInput
    _max?: PriceRangeMaxOrderByAggregateInput
    _min?: PriceRangeMinOrderByAggregateInput
    _sum?: PriceRangeSumOrderByAggregateInput
  }

  export type PriceRangeScalarWhereWithAggregatesInput = {
    AND?: PriceRangeScalarWhereWithAggregatesInput | PriceRangeScalarWhereWithAggregatesInput[]
    OR?: PriceRangeScalarWhereWithAggregatesInput[]
    NOT?: PriceRangeScalarWhereWithAggregatesInput | PriceRangeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PriceRange"> | number
    label?: StringWithAggregatesFilter<"PriceRange"> | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    rehabs?: RehabListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "name">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
  }

  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: IntFilter<"State"> | number
    name?: StringFilter<"State"> | string
    rehabs?: RehabListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rehabs?: RehabOrderByRelationAggregateInput
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    rehabs?: RehabListRelationFilter
  }, "id" | "name">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _avg?: StateAvgOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
    _sum?: StateSumOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"State"> | number
    name?: StringWithAggregatesFilter<"State"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    userId?: IntFilter<"Review"> | number
    rehabId?: IntFilter<"Review"> | number
    rehab?: XOR<RehabRelationFilter, RehabWhereInput>
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    rehabId?: SortOrder
    rehab?: RehabOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    content?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    userId?: IntFilter<"Review"> | number
    rehabId?: IntFilter<"Review"> | number
    rehab?: XOR<RehabRelationFilter, RehabWhereInput>
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    rehabId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    content?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    userId?: IntWithAggregatesFilter<"Review"> | number
    rehabId?: IntWithAggregatesFilter<"Review"> | number
  }

  export type NPIRehabsWhereInput = {
    AND?: NPIRehabsWhereInput | NPIRehabsWhereInput[]
    OR?: NPIRehabsWhereInput[]
    NOT?: NPIRehabsWhereInput | NPIRehabsWhereInput[]
    npi_number?: StringFilter<"NPIRehabs"> | string
    organization_name?: StringFilter<"NPIRehabs"> | string
    address?: StringNullableFilter<"NPIRehabs"> | string | null
    city?: StringNullableFilter<"NPIRehabs"> | string | null
    state?: StringNullableFilter<"NPIRehabs"> | string | null
    postal_code?: StringNullableFilter<"NPIRehabs"> | string | null
    phone?: StringNullableFilter<"NPIRehabs"> | string | null
    taxonomy_code?: StringNullableFilter<"NPIRehabs"> | string | null
    last_updated?: DateTimeNullableFilter<"NPIRehabs"> | Date | string | null
  }

  export type NPIRehabsOrderByWithRelationInput = {
    npi_number?: SortOrder
    organization_name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    taxonomy_code?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
  }

  export type NPIRehabsWhereUniqueInput = Prisma.AtLeast<{
    npi_number?: string
    AND?: NPIRehabsWhereInput | NPIRehabsWhereInput[]
    OR?: NPIRehabsWhereInput[]
    NOT?: NPIRehabsWhereInput | NPIRehabsWhereInput[]
    organization_name?: StringFilter<"NPIRehabs"> | string
    address?: StringNullableFilter<"NPIRehabs"> | string | null
    city?: StringNullableFilter<"NPIRehabs"> | string | null
    state?: StringNullableFilter<"NPIRehabs"> | string | null
    postal_code?: StringNullableFilter<"NPIRehabs"> | string | null
    phone?: StringNullableFilter<"NPIRehabs"> | string | null
    taxonomy_code?: StringNullableFilter<"NPIRehabs"> | string | null
    last_updated?: DateTimeNullableFilter<"NPIRehabs"> | Date | string | null
  }, "npi_number" | "npi_number">

  export type NPIRehabsOrderByWithAggregationInput = {
    npi_number?: SortOrder
    organization_name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    taxonomy_code?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    _count?: NPIRehabsCountOrderByAggregateInput
    _max?: NPIRehabsMaxOrderByAggregateInput
    _min?: NPIRehabsMinOrderByAggregateInput
  }

  export type NPIRehabsScalarWhereWithAggregatesInput = {
    AND?: NPIRehabsScalarWhereWithAggregatesInput | NPIRehabsScalarWhereWithAggregatesInput[]
    OR?: NPIRehabsScalarWhereWithAggregatesInput[]
    NOT?: NPIRehabsScalarWhereWithAggregatesInput | NPIRehabsScalarWhereWithAggregatesInput[]
    npi_number?: StringWithAggregatesFilter<"NPIRehabs"> | string
    organization_name?: StringWithAggregatesFilter<"NPIRehabs"> | string
    address?: StringNullableWithAggregatesFilter<"NPIRehabs"> | string | null
    city?: StringNullableWithAggregatesFilter<"NPIRehabs"> | string | null
    state?: StringNullableWithAggregatesFilter<"NPIRehabs"> | string | null
    postal_code?: StringNullableWithAggregatesFilter<"NPIRehabs"> | string | null
    phone?: StringNullableWithAggregatesFilter<"NPIRehabs"> | string | null
    taxonomy_code?: StringNullableWithAggregatesFilter<"NPIRehabs"> | string | null
    last_updated?: DateTimeNullableWithAggregatesFilter<"NPIRehabs"> | Date | string | null
  }

  export type usersCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RehabCreateInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
  }

  export type RehabUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RehabUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AmenityCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutAmenitiesInput
  }

  export type AmenityUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutAmenitiesInput
  }

  export type AmenityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutAmenitiesNestedInput
  }

  export type AmenityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutAmenitiesNestedInput
  }

  export type AmenityCreateManyInput = {
    id?: number
    name: string
  }

  export type AmenityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LevelOfCareCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutLevels_of_careInput
  }

  export type LevelOfCareUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutLevels_of_careInput
  }

  export type LevelOfCareUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutLevels_of_careNestedInput
  }

  export type LevelOfCareUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutLevels_of_careNestedInput
  }

  export type LevelOfCareCreateManyInput = {
    id?: number
    name: string
  }

  export type LevelOfCareUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LevelOfCareUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutConditionsInput
  }

  export type ConditionUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutConditionsInput
  }

  export type ConditionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutConditionsNestedInput
  }

  export type ConditionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutConditionsNestedInput
  }

  export type ConditionCreateManyInput = {
    id?: number
    name: string
  }

  export type ConditionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TreatmentCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutTreatmentsInput
  }

  export type TreatmentUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutTreatmentsInput
  }

  export type TreatmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutTreatmentsNestedInput
  }

  export type TreatmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutTreatmentsNestedInput
  }

  export type TreatmentCreateManyInput = {
    id?: number
    name: string
  }

  export type TreatmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TreatmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InsuranceProviderCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutInsuranceProvidersInput
  }

  export type InsuranceProviderUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutInsuranceProvidersInput
  }

  export type InsuranceProviderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutInsuranceProvidersNestedInput
  }

  export type InsuranceProviderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutInsuranceProvidersNestedInput
  }

  export type InsuranceProviderCreateManyInput = {
    id?: number
    name: string
  }

  export type InsuranceProviderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InsuranceProviderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteleCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutClienteleInput
  }

  export type ClienteleUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutClienteleInput
  }

  export type ClienteleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutClienteleNestedInput
  }

  export type ClienteleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutClienteleNestedInput
  }

  export type ClienteleCreateManyInput = {
    id?: number
    name: string
  }

  export type ClienteleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SettingCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutSettingsInput
  }

  export type SettingUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutSettingsInput
  }

  export type SettingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutSettingsNestedInput
  }

  export type SettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutSettingsNestedInput
  }

  export type SettingCreateManyInput = {
    id?: number
    name: string
  }

  export type SettingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApproachCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutApproachesInput
  }

  export type ApproachUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutApproachesInput
  }

  export type ApproachUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutApproachesNestedInput
  }

  export type ApproachUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutApproachesNestedInput
  }

  export type ApproachCreateManyInput = {
    id?: number
    name: string
  }

  export type ApproachUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApproachUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PriceRangeCreateInput = {
    label: string
    rehabs?: RehabCreateNestedManyWithoutPriceRangesInput
  }

  export type PriceRangeUncheckedCreateInput = {
    id?: number
    label: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutPriceRangesInput
  }

  export type PriceRangeUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutPriceRangesNestedInput
  }

  export type PriceRangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutPriceRangesNestedInput
  }

  export type PriceRangeCreateManyInput = {
    id?: number
    label: string
  }

  export type PriceRangeUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type PriceRangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CountryCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutCountriesInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutCountriesNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    name: string
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateCreateInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutStatesInput
  }

  export type StateUncheckedCreateInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutStatesInput
  }

  export type StateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutStatesNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutStatesNestedInput
  }

  export type StateCreateManyInput = {
    id?: number
    name: string
  }

  export type StateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    content: string
    rating: number
    createdAt?: Date | string
    rehab: RehabCreateNestedOneWithoutReviewsInput
    user: usersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    content: string
    rating: number
    createdAt?: Date | string
    userId: number
    rehabId: number
  }

  export type ReviewUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rehab?: RehabUpdateOneRequiredWithoutReviewsNestedInput
    user?: usersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    rehabId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyInput = {
    id?: number
    content: string
    rating: number
    createdAt?: Date | string
    userId: number
    rehabId: number
  }

  export type ReviewUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    rehabId?: IntFieldUpdateOperationsInput | number
  }

  export type NPIRehabsCreateInput = {
    npi_number: string
    organization_name: string
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    phone?: string | null
    taxonomy_code?: string | null
    last_updated?: Date | string | null
  }

  export type NPIRehabsUncheckedCreateInput = {
    npi_number: string
    organization_name: string
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    phone?: string | null
    taxonomy_code?: string | null
    last_updated?: Date | string | null
  }

  export type NPIRehabsUpdateInput = {
    npi_number?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomy_code?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NPIRehabsUncheckedUpdateInput = {
    npi_number?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomy_code?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NPIRehabsCreateManyInput = {
    npi_number: string
    organization_name: string
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    phone?: string | null
    taxonomy_code?: string | null
    last_updated?: Date | string | null
  }

  export type NPIRehabsUpdateManyMutationInput = {
    npi_number?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomy_code?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NPIRehabsUncheckedUpdateManyInput = {
    npi_number?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomy_code?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type RehabListRelationFilter = {
    every?: RehabWhereInput
    some?: RehabWhereInput
    none?: RehabWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type RehabOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type AmenityListRelationFilter = {
    every?: AmenityWhereInput
    some?: AmenityWhereInput
    none?: AmenityWhereInput
  }

  export type ApproachListRelationFilter = {
    every?: ApproachWhereInput
    some?: ApproachWhereInput
    none?: ApproachWhereInput
  }

  export type ClienteleListRelationFilter = {
    every?: ClienteleWhereInput
    some?: ClienteleWhereInput
    none?: ClienteleWhereInput
  }

  export type ConditionListRelationFilter = {
    every?: ConditionWhereInput
    some?: ConditionWhereInput
    none?: ConditionWhereInput
  }

  export type CountryListRelationFilter = {
    every?: CountryWhereInput
    some?: CountryWhereInput
    none?: CountryWhereInput
  }

  export type InsuranceProviderListRelationFilter = {
    every?: InsuranceProviderWhereInput
    some?: InsuranceProviderWhereInput
    none?: InsuranceProviderWhereInput
  }

  export type LevelOfCareListRelationFilter = {
    every?: LevelOfCareWhereInput
    some?: LevelOfCareWhereInput
    none?: LevelOfCareWhereInput
  }

  export type PriceRangeListRelationFilter = {
    every?: PriceRangeWhereInput
    some?: PriceRangeWhereInput
    none?: PriceRangeWhereInput
  }

  export type SettingListRelationFilter = {
    every?: SettingWhereInput
    some?: SettingWhereInput
    none?: SettingWhereInput
  }

  export type StateListRelationFilter = {
    every?: StateWhereInput
    some?: StateWhereInput
    none?: StateWhereInput
  }

  export type TreatmentListRelationFilter = {
    every?: TreatmentWhereInput
    some?: TreatmentWhereInput
    none?: TreatmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApproachOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConditionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsuranceProviderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LevelOfCareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceRangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreatmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RehabCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    last_updated_nppes?: SortOrder
    website?: SortOrder
    userId?: SortOrder
  }

  export type RehabAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RehabMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    last_updated_nppes?: SortOrder
    website?: SortOrder
    userId?: SortOrder
  }

  export type RehabMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    last_updated_nppes?: SortOrder
    website?: SortOrder
    userId?: SortOrder
  }

  export type RehabSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AmenityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AmenitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LevelOfCareCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LevelOfCareAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LevelOfCareMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LevelOfCareMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LevelOfCareSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConditionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ConditionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ConditionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ConditionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TreatmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TreatmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TreatmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TreatmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TreatmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InsuranceProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InsuranceProviderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InsuranceProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InsuranceProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InsuranceProviderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClienteleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClienteleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClienteleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApproachCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ApproachAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApproachMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ApproachMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ApproachSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PriceRangeCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type PriceRangeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PriceRangeMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type PriceRangeMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type PriceRangeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type RehabRelationFilter = {
    is?: RehabWhereInput
    isNot?: RehabWhereInput
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    rehabId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    rehabId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    rehabId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    rehabId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    rehabId?: SortOrder
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

  export type NPIRehabsCountOrderByAggregateInput = {
    npi_number?: SortOrder
    organization_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    phone?: SortOrder
    taxonomy_code?: SortOrder
    last_updated?: SortOrder
  }

  export type NPIRehabsMaxOrderByAggregateInput = {
    npi_number?: SortOrder
    organization_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    phone?: SortOrder
    taxonomy_code?: SortOrder
    last_updated?: SortOrder
  }

  export type NPIRehabsMinOrderByAggregateInput = {
    npi_number?: SortOrder
    organization_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    phone?: SortOrder
    taxonomy_code?: SortOrder
    last_updated?: SortOrder
  }

  export type RehabCreateNestedManyWithoutUserInput = {
    create?: XOR<RehabCreateWithoutUserInput, RehabUncheckedCreateWithoutUserInput> | RehabCreateWithoutUserInput[] | RehabUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutUserInput | RehabCreateOrConnectWithoutUserInput[]
    createMany?: RehabCreateManyUserInputEnvelope
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RehabCreateWithoutUserInput, RehabUncheckedCreateWithoutUserInput> | RehabCreateWithoutUserInput[] | RehabUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutUserInput | RehabCreateOrConnectWithoutUserInput[]
    createMany?: RehabCreateManyUserInputEnvelope
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RehabUpdateManyWithoutUserNestedInput = {
    create?: XOR<RehabCreateWithoutUserInput, RehabUncheckedCreateWithoutUserInput> | RehabCreateWithoutUserInput[] | RehabUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutUserInput | RehabCreateOrConnectWithoutUserInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutUserInput | RehabUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RehabCreateManyUserInputEnvelope
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutUserInput | RehabUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutUserInput | RehabUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RehabUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RehabCreateWithoutUserInput, RehabUncheckedCreateWithoutUserInput> | RehabCreateWithoutUserInput[] | RehabUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutUserInput | RehabCreateOrConnectWithoutUserInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutUserInput | RehabUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RehabCreateManyUserInputEnvelope
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutUserInput | RehabUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutUserInput | RehabUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutRehabsInput = {
    create?: XOR<usersCreateWithoutRehabsInput, usersUncheckedCreateWithoutRehabsInput>
    connectOrCreate?: usersCreateOrConnectWithoutRehabsInput
    connect?: usersWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutRehabInput = {
    create?: XOR<ReviewCreateWithoutRehabInput, ReviewUncheckedCreateWithoutRehabInput> | ReviewCreateWithoutRehabInput[] | ReviewUncheckedCreateWithoutRehabInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRehabInput | ReviewCreateOrConnectWithoutRehabInput[]
    createMany?: ReviewCreateManyRehabInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type AmenityCreateNestedManyWithoutRehabsInput = {
    create?: XOR<AmenityCreateWithoutRehabsInput, AmenityUncheckedCreateWithoutRehabsInput> | AmenityCreateWithoutRehabsInput[] | AmenityUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutRehabsInput | AmenityCreateOrConnectWithoutRehabsInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
  }

  export type ApproachCreateNestedManyWithoutRehabsInput = {
    create?: XOR<ApproachCreateWithoutRehabsInput, ApproachUncheckedCreateWithoutRehabsInput> | ApproachCreateWithoutRehabsInput[] | ApproachUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ApproachCreateOrConnectWithoutRehabsInput | ApproachCreateOrConnectWithoutRehabsInput[]
    connect?: ApproachWhereUniqueInput | ApproachWhereUniqueInput[]
  }

  export type ClienteleCreateNestedManyWithoutRehabsInput = {
    create?: XOR<ClienteleCreateWithoutRehabsInput, ClienteleUncheckedCreateWithoutRehabsInput> | ClienteleCreateWithoutRehabsInput[] | ClienteleUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ClienteleCreateOrConnectWithoutRehabsInput | ClienteleCreateOrConnectWithoutRehabsInput[]
    connect?: ClienteleWhereUniqueInput | ClienteleWhereUniqueInput[]
  }

  export type ConditionCreateNestedManyWithoutRehabsInput = {
    create?: XOR<ConditionCreateWithoutRehabsInput, ConditionUncheckedCreateWithoutRehabsInput> | ConditionCreateWithoutRehabsInput[] | ConditionUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutRehabsInput | ConditionCreateOrConnectWithoutRehabsInput[]
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
  }

  export type CountryCreateNestedManyWithoutRehabsInput = {
    create?: XOR<CountryCreateWithoutRehabsInput, CountryUncheckedCreateWithoutRehabsInput> | CountryCreateWithoutRehabsInput[] | CountryUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRehabsInput | CountryCreateOrConnectWithoutRehabsInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type InsuranceProviderCreateNestedManyWithoutRehabsInput = {
    create?: XOR<InsuranceProviderCreateWithoutRehabsInput, InsuranceProviderUncheckedCreateWithoutRehabsInput> | InsuranceProviderCreateWithoutRehabsInput[] | InsuranceProviderUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: InsuranceProviderCreateOrConnectWithoutRehabsInput | InsuranceProviderCreateOrConnectWithoutRehabsInput[]
    connect?: InsuranceProviderWhereUniqueInput | InsuranceProviderWhereUniqueInput[]
  }

  export type LevelOfCareCreateNestedManyWithoutRehabsInput = {
    create?: XOR<LevelOfCareCreateWithoutRehabsInput, LevelOfCareUncheckedCreateWithoutRehabsInput> | LevelOfCareCreateWithoutRehabsInput[] | LevelOfCareUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: LevelOfCareCreateOrConnectWithoutRehabsInput | LevelOfCareCreateOrConnectWithoutRehabsInput[]
    connect?: LevelOfCareWhereUniqueInput | LevelOfCareWhereUniqueInput[]
  }

  export type PriceRangeCreateNestedManyWithoutRehabsInput = {
    create?: XOR<PriceRangeCreateWithoutRehabsInput, PriceRangeUncheckedCreateWithoutRehabsInput> | PriceRangeCreateWithoutRehabsInput[] | PriceRangeUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: PriceRangeCreateOrConnectWithoutRehabsInput | PriceRangeCreateOrConnectWithoutRehabsInput[]
    connect?: PriceRangeWhereUniqueInput | PriceRangeWhereUniqueInput[]
  }

  export type SettingCreateNestedManyWithoutRehabsInput = {
    create?: XOR<SettingCreateWithoutRehabsInput, SettingUncheckedCreateWithoutRehabsInput> | SettingCreateWithoutRehabsInput[] | SettingUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutRehabsInput | SettingCreateOrConnectWithoutRehabsInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type StateCreateNestedManyWithoutRehabsInput = {
    create?: XOR<StateCreateWithoutRehabsInput, StateUncheckedCreateWithoutRehabsInput> | StateCreateWithoutRehabsInput[] | StateUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: StateCreateOrConnectWithoutRehabsInput | StateCreateOrConnectWithoutRehabsInput[]
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
  }

  export type TreatmentCreateNestedManyWithoutRehabsInput = {
    create?: XOR<TreatmentCreateWithoutRehabsInput, TreatmentUncheckedCreateWithoutRehabsInput> | TreatmentCreateWithoutRehabsInput[] | TreatmentUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutRehabsInput | TreatmentCreateOrConnectWithoutRehabsInput[]
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRehabInput = {
    create?: XOR<ReviewCreateWithoutRehabInput, ReviewUncheckedCreateWithoutRehabInput> | ReviewCreateWithoutRehabInput[] | ReviewUncheckedCreateWithoutRehabInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRehabInput | ReviewCreateOrConnectWithoutRehabInput[]
    createMany?: ReviewCreateManyRehabInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type AmenityUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<AmenityCreateWithoutRehabsInput, AmenityUncheckedCreateWithoutRehabsInput> | AmenityCreateWithoutRehabsInput[] | AmenityUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutRehabsInput | AmenityCreateOrConnectWithoutRehabsInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
  }

  export type ApproachUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<ApproachCreateWithoutRehabsInput, ApproachUncheckedCreateWithoutRehabsInput> | ApproachCreateWithoutRehabsInput[] | ApproachUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ApproachCreateOrConnectWithoutRehabsInput | ApproachCreateOrConnectWithoutRehabsInput[]
    connect?: ApproachWhereUniqueInput | ApproachWhereUniqueInput[]
  }

  export type ClienteleUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<ClienteleCreateWithoutRehabsInput, ClienteleUncheckedCreateWithoutRehabsInput> | ClienteleCreateWithoutRehabsInput[] | ClienteleUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ClienteleCreateOrConnectWithoutRehabsInput | ClienteleCreateOrConnectWithoutRehabsInput[]
    connect?: ClienteleWhereUniqueInput | ClienteleWhereUniqueInput[]
  }

  export type ConditionUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<ConditionCreateWithoutRehabsInput, ConditionUncheckedCreateWithoutRehabsInput> | ConditionCreateWithoutRehabsInput[] | ConditionUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutRehabsInput | ConditionCreateOrConnectWithoutRehabsInput[]
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<CountryCreateWithoutRehabsInput, CountryUncheckedCreateWithoutRehabsInput> | CountryCreateWithoutRehabsInput[] | CountryUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRehabsInput | CountryCreateOrConnectWithoutRehabsInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<InsuranceProviderCreateWithoutRehabsInput, InsuranceProviderUncheckedCreateWithoutRehabsInput> | InsuranceProviderCreateWithoutRehabsInput[] | InsuranceProviderUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: InsuranceProviderCreateOrConnectWithoutRehabsInput | InsuranceProviderCreateOrConnectWithoutRehabsInput[]
    connect?: InsuranceProviderWhereUniqueInput | InsuranceProviderWhereUniqueInput[]
  }

  export type LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<LevelOfCareCreateWithoutRehabsInput, LevelOfCareUncheckedCreateWithoutRehabsInput> | LevelOfCareCreateWithoutRehabsInput[] | LevelOfCareUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: LevelOfCareCreateOrConnectWithoutRehabsInput | LevelOfCareCreateOrConnectWithoutRehabsInput[]
    connect?: LevelOfCareWhereUniqueInput | LevelOfCareWhereUniqueInput[]
  }

  export type PriceRangeUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<PriceRangeCreateWithoutRehabsInput, PriceRangeUncheckedCreateWithoutRehabsInput> | PriceRangeCreateWithoutRehabsInput[] | PriceRangeUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: PriceRangeCreateOrConnectWithoutRehabsInput | PriceRangeCreateOrConnectWithoutRehabsInput[]
    connect?: PriceRangeWhereUniqueInput | PriceRangeWhereUniqueInput[]
  }

  export type SettingUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<SettingCreateWithoutRehabsInput, SettingUncheckedCreateWithoutRehabsInput> | SettingCreateWithoutRehabsInput[] | SettingUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutRehabsInput | SettingCreateOrConnectWithoutRehabsInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type StateUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<StateCreateWithoutRehabsInput, StateUncheckedCreateWithoutRehabsInput> | StateCreateWithoutRehabsInput[] | StateUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: StateCreateOrConnectWithoutRehabsInput | StateCreateOrConnectWithoutRehabsInput[]
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
  }

  export type TreatmentUncheckedCreateNestedManyWithoutRehabsInput = {
    create?: XOR<TreatmentCreateWithoutRehabsInput, TreatmentUncheckedCreateWithoutRehabsInput> | TreatmentCreateWithoutRehabsInput[] | TreatmentUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutRehabsInput | TreatmentCreateOrConnectWithoutRehabsInput[]
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutRehabsNestedInput = {
    create?: XOR<usersCreateWithoutRehabsInput, usersUncheckedCreateWithoutRehabsInput>
    connectOrCreate?: usersCreateOrConnectWithoutRehabsInput
    upsert?: usersUpsertWithoutRehabsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRehabsInput, usersUpdateWithoutRehabsInput>, usersUncheckedUpdateWithoutRehabsInput>
  }

  export type ReviewUpdateManyWithoutRehabNestedInput = {
    create?: XOR<ReviewCreateWithoutRehabInput, ReviewUncheckedCreateWithoutRehabInput> | ReviewCreateWithoutRehabInput[] | ReviewUncheckedCreateWithoutRehabInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRehabInput | ReviewCreateOrConnectWithoutRehabInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRehabInput | ReviewUpsertWithWhereUniqueWithoutRehabInput[]
    createMany?: ReviewCreateManyRehabInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRehabInput | ReviewUpdateWithWhereUniqueWithoutRehabInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRehabInput | ReviewUpdateManyWithWhereWithoutRehabInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AmenityUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<AmenityCreateWithoutRehabsInput, AmenityUncheckedCreateWithoutRehabsInput> | AmenityCreateWithoutRehabsInput[] | AmenityUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutRehabsInput | AmenityCreateOrConnectWithoutRehabsInput[]
    upsert?: AmenityUpsertWithWhereUniqueWithoutRehabsInput | AmenityUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    disconnect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    delete?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    update?: AmenityUpdateWithWhereUniqueWithoutRehabsInput | AmenityUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: AmenityUpdateManyWithWhereWithoutRehabsInput | AmenityUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
  }

  export type ApproachUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<ApproachCreateWithoutRehabsInput, ApproachUncheckedCreateWithoutRehabsInput> | ApproachCreateWithoutRehabsInput[] | ApproachUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ApproachCreateOrConnectWithoutRehabsInput | ApproachCreateOrConnectWithoutRehabsInput[]
    upsert?: ApproachUpsertWithWhereUniqueWithoutRehabsInput | ApproachUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: ApproachWhereUniqueInput | ApproachWhereUniqueInput[]
    disconnect?: ApproachWhereUniqueInput | ApproachWhereUniqueInput[]
    delete?: ApproachWhereUniqueInput | ApproachWhereUniqueInput[]
    connect?: ApproachWhereUniqueInput | ApproachWhereUniqueInput[]
    update?: ApproachUpdateWithWhereUniqueWithoutRehabsInput | ApproachUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: ApproachUpdateManyWithWhereWithoutRehabsInput | ApproachUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: ApproachScalarWhereInput | ApproachScalarWhereInput[]
  }

  export type ClienteleUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<ClienteleCreateWithoutRehabsInput, ClienteleUncheckedCreateWithoutRehabsInput> | ClienteleCreateWithoutRehabsInput[] | ClienteleUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ClienteleCreateOrConnectWithoutRehabsInput | ClienteleCreateOrConnectWithoutRehabsInput[]
    upsert?: ClienteleUpsertWithWhereUniqueWithoutRehabsInput | ClienteleUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: ClienteleWhereUniqueInput | ClienteleWhereUniqueInput[]
    disconnect?: ClienteleWhereUniqueInput | ClienteleWhereUniqueInput[]
    delete?: ClienteleWhereUniqueInput | ClienteleWhereUniqueInput[]
    connect?: ClienteleWhereUniqueInput | ClienteleWhereUniqueInput[]
    update?: ClienteleUpdateWithWhereUniqueWithoutRehabsInput | ClienteleUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: ClienteleUpdateManyWithWhereWithoutRehabsInput | ClienteleUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: ClienteleScalarWhereInput | ClienteleScalarWhereInput[]
  }

  export type ConditionUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<ConditionCreateWithoutRehabsInput, ConditionUncheckedCreateWithoutRehabsInput> | ConditionCreateWithoutRehabsInput[] | ConditionUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutRehabsInput | ConditionCreateOrConnectWithoutRehabsInput[]
    upsert?: ConditionUpsertWithWhereUniqueWithoutRehabsInput | ConditionUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    disconnect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    delete?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    update?: ConditionUpdateWithWhereUniqueWithoutRehabsInput | ConditionUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: ConditionUpdateManyWithWhereWithoutRehabsInput | ConditionUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
  }

  export type CountryUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<CountryCreateWithoutRehabsInput, CountryUncheckedCreateWithoutRehabsInput> | CountryCreateWithoutRehabsInput[] | CountryUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRehabsInput | CountryCreateOrConnectWithoutRehabsInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutRehabsInput | CountryUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutRehabsInput | CountryUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutRehabsInput | CountryUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type InsuranceProviderUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<InsuranceProviderCreateWithoutRehabsInput, InsuranceProviderUncheckedCreateWithoutRehabsInput> | InsuranceProviderCreateWithoutRehabsInput[] | InsuranceProviderUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: InsuranceProviderCreateOrConnectWithoutRehabsInput | InsuranceProviderCreateOrConnectWithoutRehabsInput[]
    upsert?: InsuranceProviderUpsertWithWhereUniqueWithoutRehabsInput | InsuranceProviderUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: InsuranceProviderWhereUniqueInput | InsuranceProviderWhereUniqueInput[]
    disconnect?: InsuranceProviderWhereUniqueInput | InsuranceProviderWhereUniqueInput[]
    delete?: InsuranceProviderWhereUniqueInput | InsuranceProviderWhereUniqueInput[]
    connect?: InsuranceProviderWhereUniqueInput | InsuranceProviderWhereUniqueInput[]
    update?: InsuranceProviderUpdateWithWhereUniqueWithoutRehabsInput | InsuranceProviderUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: InsuranceProviderUpdateManyWithWhereWithoutRehabsInput | InsuranceProviderUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: InsuranceProviderScalarWhereInput | InsuranceProviderScalarWhereInput[]
  }

  export type LevelOfCareUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<LevelOfCareCreateWithoutRehabsInput, LevelOfCareUncheckedCreateWithoutRehabsInput> | LevelOfCareCreateWithoutRehabsInput[] | LevelOfCareUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: LevelOfCareCreateOrConnectWithoutRehabsInput | LevelOfCareCreateOrConnectWithoutRehabsInput[]
    upsert?: LevelOfCareUpsertWithWhereUniqueWithoutRehabsInput | LevelOfCareUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: LevelOfCareWhereUniqueInput | LevelOfCareWhereUniqueInput[]
    disconnect?: LevelOfCareWhereUniqueInput | LevelOfCareWhereUniqueInput[]
    delete?: LevelOfCareWhereUniqueInput | LevelOfCareWhereUniqueInput[]
    connect?: LevelOfCareWhereUniqueInput | LevelOfCareWhereUniqueInput[]
    update?: LevelOfCareUpdateWithWhereUniqueWithoutRehabsInput | LevelOfCareUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: LevelOfCareUpdateManyWithWhereWithoutRehabsInput | LevelOfCareUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: LevelOfCareScalarWhereInput | LevelOfCareScalarWhereInput[]
  }

  export type PriceRangeUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<PriceRangeCreateWithoutRehabsInput, PriceRangeUncheckedCreateWithoutRehabsInput> | PriceRangeCreateWithoutRehabsInput[] | PriceRangeUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: PriceRangeCreateOrConnectWithoutRehabsInput | PriceRangeCreateOrConnectWithoutRehabsInput[]
    upsert?: PriceRangeUpsertWithWhereUniqueWithoutRehabsInput | PriceRangeUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: PriceRangeWhereUniqueInput | PriceRangeWhereUniqueInput[]
    disconnect?: PriceRangeWhereUniqueInput | PriceRangeWhereUniqueInput[]
    delete?: PriceRangeWhereUniqueInput | PriceRangeWhereUniqueInput[]
    connect?: PriceRangeWhereUniqueInput | PriceRangeWhereUniqueInput[]
    update?: PriceRangeUpdateWithWhereUniqueWithoutRehabsInput | PriceRangeUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: PriceRangeUpdateManyWithWhereWithoutRehabsInput | PriceRangeUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: PriceRangeScalarWhereInput | PriceRangeScalarWhereInput[]
  }

  export type SettingUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<SettingCreateWithoutRehabsInput, SettingUncheckedCreateWithoutRehabsInput> | SettingCreateWithoutRehabsInput[] | SettingUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutRehabsInput | SettingCreateOrConnectWithoutRehabsInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutRehabsInput | SettingUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutRehabsInput | SettingUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutRehabsInput | SettingUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type StateUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<StateCreateWithoutRehabsInput, StateUncheckedCreateWithoutRehabsInput> | StateCreateWithoutRehabsInput[] | StateUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: StateCreateOrConnectWithoutRehabsInput | StateCreateOrConnectWithoutRehabsInput[]
    upsert?: StateUpsertWithWhereUniqueWithoutRehabsInput | StateUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: StateWhereUniqueInput | StateWhereUniqueInput[]
    disconnect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    delete?: StateWhereUniqueInput | StateWhereUniqueInput[]
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    update?: StateUpdateWithWhereUniqueWithoutRehabsInput | StateUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: StateUpdateManyWithWhereWithoutRehabsInput | StateUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: StateScalarWhereInput | StateScalarWhereInput[]
  }

  export type TreatmentUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<TreatmentCreateWithoutRehabsInput, TreatmentUncheckedCreateWithoutRehabsInput> | TreatmentCreateWithoutRehabsInput[] | TreatmentUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutRehabsInput | TreatmentCreateOrConnectWithoutRehabsInput[]
    upsert?: TreatmentUpsertWithWhereUniqueWithoutRehabsInput | TreatmentUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    disconnect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    delete?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    update?: TreatmentUpdateWithWhereUniqueWithoutRehabsInput | TreatmentUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: TreatmentUpdateManyWithWhereWithoutRehabsInput | TreatmentUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: TreatmentScalarWhereInput | TreatmentScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUncheckedUpdateManyWithoutRehabNestedInput = {
    create?: XOR<ReviewCreateWithoutRehabInput, ReviewUncheckedCreateWithoutRehabInput> | ReviewCreateWithoutRehabInput[] | ReviewUncheckedCreateWithoutRehabInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRehabInput | ReviewCreateOrConnectWithoutRehabInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRehabInput | ReviewUpsertWithWhereUniqueWithoutRehabInput[]
    createMany?: ReviewCreateManyRehabInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRehabInput | ReviewUpdateWithWhereUniqueWithoutRehabInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRehabInput | ReviewUpdateManyWithWhereWithoutRehabInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AmenityUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<AmenityCreateWithoutRehabsInput, AmenityUncheckedCreateWithoutRehabsInput> | AmenityCreateWithoutRehabsInput[] | AmenityUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutRehabsInput | AmenityCreateOrConnectWithoutRehabsInput[]
    upsert?: AmenityUpsertWithWhereUniqueWithoutRehabsInput | AmenityUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    disconnect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    delete?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    update?: AmenityUpdateWithWhereUniqueWithoutRehabsInput | AmenityUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: AmenityUpdateManyWithWhereWithoutRehabsInput | AmenityUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
  }

  export type ApproachUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<ApproachCreateWithoutRehabsInput, ApproachUncheckedCreateWithoutRehabsInput> | ApproachCreateWithoutRehabsInput[] | ApproachUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ApproachCreateOrConnectWithoutRehabsInput | ApproachCreateOrConnectWithoutRehabsInput[]
    upsert?: ApproachUpsertWithWhereUniqueWithoutRehabsInput | ApproachUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: ApproachWhereUniqueInput | ApproachWhereUniqueInput[]
    disconnect?: ApproachWhereUniqueInput | ApproachWhereUniqueInput[]
    delete?: ApproachWhereUniqueInput | ApproachWhereUniqueInput[]
    connect?: ApproachWhereUniqueInput | ApproachWhereUniqueInput[]
    update?: ApproachUpdateWithWhereUniqueWithoutRehabsInput | ApproachUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: ApproachUpdateManyWithWhereWithoutRehabsInput | ApproachUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: ApproachScalarWhereInput | ApproachScalarWhereInput[]
  }

  export type ClienteleUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<ClienteleCreateWithoutRehabsInput, ClienteleUncheckedCreateWithoutRehabsInput> | ClienteleCreateWithoutRehabsInput[] | ClienteleUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ClienteleCreateOrConnectWithoutRehabsInput | ClienteleCreateOrConnectWithoutRehabsInput[]
    upsert?: ClienteleUpsertWithWhereUniqueWithoutRehabsInput | ClienteleUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: ClienteleWhereUniqueInput | ClienteleWhereUniqueInput[]
    disconnect?: ClienteleWhereUniqueInput | ClienteleWhereUniqueInput[]
    delete?: ClienteleWhereUniqueInput | ClienteleWhereUniqueInput[]
    connect?: ClienteleWhereUniqueInput | ClienteleWhereUniqueInput[]
    update?: ClienteleUpdateWithWhereUniqueWithoutRehabsInput | ClienteleUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: ClienteleUpdateManyWithWhereWithoutRehabsInput | ClienteleUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: ClienteleScalarWhereInput | ClienteleScalarWhereInput[]
  }

  export type ConditionUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<ConditionCreateWithoutRehabsInput, ConditionUncheckedCreateWithoutRehabsInput> | ConditionCreateWithoutRehabsInput[] | ConditionUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutRehabsInput | ConditionCreateOrConnectWithoutRehabsInput[]
    upsert?: ConditionUpsertWithWhereUniqueWithoutRehabsInput | ConditionUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    disconnect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    delete?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    update?: ConditionUpdateWithWhereUniqueWithoutRehabsInput | ConditionUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: ConditionUpdateManyWithWhereWithoutRehabsInput | ConditionUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<CountryCreateWithoutRehabsInput, CountryUncheckedCreateWithoutRehabsInput> | CountryCreateWithoutRehabsInput[] | CountryUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRehabsInput | CountryCreateOrConnectWithoutRehabsInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutRehabsInput | CountryUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutRehabsInput | CountryUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutRehabsInput | CountryUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<InsuranceProviderCreateWithoutRehabsInput, InsuranceProviderUncheckedCreateWithoutRehabsInput> | InsuranceProviderCreateWithoutRehabsInput[] | InsuranceProviderUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: InsuranceProviderCreateOrConnectWithoutRehabsInput | InsuranceProviderCreateOrConnectWithoutRehabsInput[]
    upsert?: InsuranceProviderUpsertWithWhereUniqueWithoutRehabsInput | InsuranceProviderUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: InsuranceProviderWhereUniqueInput | InsuranceProviderWhereUniqueInput[]
    disconnect?: InsuranceProviderWhereUniqueInput | InsuranceProviderWhereUniqueInput[]
    delete?: InsuranceProviderWhereUniqueInput | InsuranceProviderWhereUniqueInput[]
    connect?: InsuranceProviderWhereUniqueInput | InsuranceProviderWhereUniqueInput[]
    update?: InsuranceProviderUpdateWithWhereUniqueWithoutRehabsInput | InsuranceProviderUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: InsuranceProviderUpdateManyWithWhereWithoutRehabsInput | InsuranceProviderUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: InsuranceProviderScalarWhereInput | InsuranceProviderScalarWhereInput[]
  }

  export type LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<LevelOfCareCreateWithoutRehabsInput, LevelOfCareUncheckedCreateWithoutRehabsInput> | LevelOfCareCreateWithoutRehabsInput[] | LevelOfCareUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: LevelOfCareCreateOrConnectWithoutRehabsInput | LevelOfCareCreateOrConnectWithoutRehabsInput[]
    upsert?: LevelOfCareUpsertWithWhereUniqueWithoutRehabsInput | LevelOfCareUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: LevelOfCareWhereUniqueInput | LevelOfCareWhereUniqueInput[]
    disconnect?: LevelOfCareWhereUniqueInput | LevelOfCareWhereUniqueInput[]
    delete?: LevelOfCareWhereUniqueInput | LevelOfCareWhereUniqueInput[]
    connect?: LevelOfCareWhereUniqueInput | LevelOfCareWhereUniqueInput[]
    update?: LevelOfCareUpdateWithWhereUniqueWithoutRehabsInput | LevelOfCareUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: LevelOfCareUpdateManyWithWhereWithoutRehabsInput | LevelOfCareUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: LevelOfCareScalarWhereInput | LevelOfCareScalarWhereInput[]
  }

  export type PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<PriceRangeCreateWithoutRehabsInput, PriceRangeUncheckedCreateWithoutRehabsInput> | PriceRangeCreateWithoutRehabsInput[] | PriceRangeUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: PriceRangeCreateOrConnectWithoutRehabsInput | PriceRangeCreateOrConnectWithoutRehabsInput[]
    upsert?: PriceRangeUpsertWithWhereUniqueWithoutRehabsInput | PriceRangeUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: PriceRangeWhereUniqueInput | PriceRangeWhereUniqueInput[]
    disconnect?: PriceRangeWhereUniqueInput | PriceRangeWhereUniqueInput[]
    delete?: PriceRangeWhereUniqueInput | PriceRangeWhereUniqueInput[]
    connect?: PriceRangeWhereUniqueInput | PriceRangeWhereUniqueInput[]
    update?: PriceRangeUpdateWithWhereUniqueWithoutRehabsInput | PriceRangeUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: PriceRangeUpdateManyWithWhereWithoutRehabsInput | PriceRangeUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: PriceRangeScalarWhereInput | PriceRangeScalarWhereInput[]
  }

  export type SettingUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<SettingCreateWithoutRehabsInput, SettingUncheckedCreateWithoutRehabsInput> | SettingCreateWithoutRehabsInput[] | SettingUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutRehabsInput | SettingCreateOrConnectWithoutRehabsInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutRehabsInput | SettingUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutRehabsInput | SettingUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutRehabsInput | SettingUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type StateUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<StateCreateWithoutRehabsInput, StateUncheckedCreateWithoutRehabsInput> | StateCreateWithoutRehabsInput[] | StateUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: StateCreateOrConnectWithoutRehabsInput | StateCreateOrConnectWithoutRehabsInput[]
    upsert?: StateUpsertWithWhereUniqueWithoutRehabsInput | StateUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: StateWhereUniqueInput | StateWhereUniqueInput[]
    disconnect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    delete?: StateWhereUniqueInput | StateWhereUniqueInput[]
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    update?: StateUpdateWithWhereUniqueWithoutRehabsInput | StateUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: StateUpdateManyWithWhereWithoutRehabsInput | StateUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: StateScalarWhereInput | StateScalarWhereInput[]
  }

  export type TreatmentUncheckedUpdateManyWithoutRehabsNestedInput = {
    create?: XOR<TreatmentCreateWithoutRehabsInput, TreatmentUncheckedCreateWithoutRehabsInput> | TreatmentCreateWithoutRehabsInput[] | TreatmentUncheckedCreateWithoutRehabsInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutRehabsInput | TreatmentCreateOrConnectWithoutRehabsInput[]
    upsert?: TreatmentUpsertWithWhereUniqueWithoutRehabsInput | TreatmentUpsertWithWhereUniqueWithoutRehabsInput[]
    set?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    disconnect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    delete?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    update?: TreatmentUpdateWithWhereUniqueWithoutRehabsInput | TreatmentUpdateWithWhereUniqueWithoutRehabsInput[]
    updateMany?: TreatmentUpdateManyWithWhereWithoutRehabsInput | TreatmentUpdateManyWithWhereWithoutRehabsInput[]
    deleteMany?: TreatmentScalarWhereInput | TreatmentScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutAmenitiesInput = {
    create?: XOR<RehabCreateWithoutAmenitiesInput, RehabUncheckedCreateWithoutAmenitiesInput> | RehabCreateWithoutAmenitiesInput[] | RehabUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutAmenitiesInput | RehabCreateOrConnectWithoutAmenitiesInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutAmenitiesInput = {
    create?: XOR<RehabCreateWithoutAmenitiesInput, RehabUncheckedCreateWithoutAmenitiesInput> | RehabCreateWithoutAmenitiesInput[] | RehabUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutAmenitiesInput | RehabCreateOrConnectWithoutAmenitiesInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutAmenitiesNestedInput = {
    create?: XOR<RehabCreateWithoutAmenitiesInput, RehabUncheckedCreateWithoutAmenitiesInput> | RehabCreateWithoutAmenitiesInput[] | RehabUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutAmenitiesInput | RehabCreateOrConnectWithoutAmenitiesInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutAmenitiesInput | RehabUpsertWithWhereUniqueWithoutAmenitiesInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutAmenitiesInput | RehabUpdateWithWhereUniqueWithoutAmenitiesInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutAmenitiesInput | RehabUpdateManyWithWhereWithoutAmenitiesInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutAmenitiesNestedInput = {
    create?: XOR<RehabCreateWithoutAmenitiesInput, RehabUncheckedCreateWithoutAmenitiesInput> | RehabCreateWithoutAmenitiesInput[] | RehabUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutAmenitiesInput | RehabCreateOrConnectWithoutAmenitiesInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutAmenitiesInput | RehabUpsertWithWhereUniqueWithoutAmenitiesInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutAmenitiesInput | RehabUpdateWithWhereUniqueWithoutAmenitiesInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutAmenitiesInput | RehabUpdateManyWithWhereWithoutAmenitiesInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutLevels_of_careInput = {
    create?: XOR<RehabCreateWithoutLevels_of_careInput, RehabUncheckedCreateWithoutLevels_of_careInput> | RehabCreateWithoutLevels_of_careInput[] | RehabUncheckedCreateWithoutLevels_of_careInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutLevels_of_careInput | RehabCreateOrConnectWithoutLevels_of_careInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutLevels_of_careInput = {
    create?: XOR<RehabCreateWithoutLevels_of_careInput, RehabUncheckedCreateWithoutLevels_of_careInput> | RehabCreateWithoutLevels_of_careInput[] | RehabUncheckedCreateWithoutLevels_of_careInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutLevels_of_careInput | RehabCreateOrConnectWithoutLevels_of_careInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutLevels_of_careNestedInput = {
    create?: XOR<RehabCreateWithoutLevels_of_careInput, RehabUncheckedCreateWithoutLevels_of_careInput> | RehabCreateWithoutLevels_of_careInput[] | RehabUncheckedCreateWithoutLevels_of_careInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutLevels_of_careInput | RehabCreateOrConnectWithoutLevels_of_careInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutLevels_of_careInput | RehabUpsertWithWhereUniqueWithoutLevels_of_careInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutLevels_of_careInput | RehabUpdateWithWhereUniqueWithoutLevels_of_careInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutLevels_of_careInput | RehabUpdateManyWithWhereWithoutLevels_of_careInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutLevels_of_careNestedInput = {
    create?: XOR<RehabCreateWithoutLevels_of_careInput, RehabUncheckedCreateWithoutLevels_of_careInput> | RehabCreateWithoutLevels_of_careInput[] | RehabUncheckedCreateWithoutLevels_of_careInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutLevels_of_careInput | RehabCreateOrConnectWithoutLevels_of_careInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutLevels_of_careInput | RehabUpsertWithWhereUniqueWithoutLevels_of_careInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutLevels_of_careInput | RehabUpdateWithWhereUniqueWithoutLevels_of_careInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutLevels_of_careInput | RehabUpdateManyWithWhereWithoutLevels_of_careInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutConditionsInput = {
    create?: XOR<RehabCreateWithoutConditionsInput, RehabUncheckedCreateWithoutConditionsInput> | RehabCreateWithoutConditionsInput[] | RehabUncheckedCreateWithoutConditionsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutConditionsInput | RehabCreateOrConnectWithoutConditionsInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutConditionsInput = {
    create?: XOR<RehabCreateWithoutConditionsInput, RehabUncheckedCreateWithoutConditionsInput> | RehabCreateWithoutConditionsInput[] | RehabUncheckedCreateWithoutConditionsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutConditionsInput | RehabCreateOrConnectWithoutConditionsInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutConditionsNestedInput = {
    create?: XOR<RehabCreateWithoutConditionsInput, RehabUncheckedCreateWithoutConditionsInput> | RehabCreateWithoutConditionsInput[] | RehabUncheckedCreateWithoutConditionsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutConditionsInput | RehabCreateOrConnectWithoutConditionsInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutConditionsInput | RehabUpsertWithWhereUniqueWithoutConditionsInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutConditionsInput | RehabUpdateWithWhereUniqueWithoutConditionsInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutConditionsInput | RehabUpdateManyWithWhereWithoutConditionsInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutConditionsNestedInput = {
    create?: XOR<RehabCreateWithoutConditionsInput, RehabUncheckedCreateWithoutConditionsInput> | RehabCreateWithoutConditionsInput[] | RehabUncheckedCreateWithoutConditionsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutConditionsInput | RehabCreateOrConnectWithoutConditionsInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutConditionsInput | RehabUpsertWithWhereUniqueWithoutConditionsInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutConditionsInput | RehabUpdateWithWhereUniqueWithoutConditionsInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutConditionsInput | RehabUpdateManyWithWhereWithoutConditionsInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutTreatmentsInput = {
    create?: XOR<RehabCreateWithoutTreatmentsInput, RehabUncheckedCreateWithoutTreatmentsInput> | RehabCreateWithoutTreatmentsInput[] | RehabUncheckedCreateWithoutTreatmentsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutTreatmentsInput | RehabCreateOrConnectWithoutTreatmentsInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutTreatmentsInput = {
    create?: XOR<RehabCreateWithoutTreatmentsInput, RehabUncheckedCreateWithoutTreatmentsInput> | RehabCreateWithoutTreatmentsInput[] | RehabUncheckedCreateWithoutTreatmentsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutTreatmentsInput | RehabCreateOrConnectWithoutTreatmentsInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutTreatmentsNestedInput = {
    create?: XOR<RehabCreateWithoutTreatmentsInput, RehabUncheckedCreateWithoutTreatmentsInput> | RehabCreateWithoutTreatmentsInput[] | RehabUncheckedCreateWithoutTreatmentsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutTreatmentsInput | RehabCreateOrConnectWithoutTreatmentsInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutTreatmentsInput | RehabUpsertWithWhereUniqueWithoutTreatmentsInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutTreatmentsInput | RehabUpdateWithWhereUniqueWithoutTreatmentsInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutTreatmentsInput | RehabUpdateManyWithWhereWithoutTreatmentsInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutTreatmentsNestedInput = {
    create?: XOR<RehabCreateWithoutTreatmentsInput, RehabUncheckedCreateWithoutTreatmentsInput> | RehabCreateWithoutTreatmentsInput[] | RehabUncheckedCreateWithoutTreatmentsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutTreatmentsInput | RehabCreateOrConnectWithoutTreatmentsInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutTreatmentsInput | RehabUpsertWithWhereUniqueWithoutTreatmentsInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutTreatmentsInput | RehabUpdateWithWhereUniqueWithoutTreatmentsInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutTreatmentsInput | RehabUpdateManyWithWhereWithoutTreatmentsInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutInsuranceProvidersInput = {
    create?: XOR<RehabCreateWithoutInsuranceProvidersInput, RehabUncheckedCreateWithoutInsuranceProvidersInput> | RehabCreateWithoutInsuranceProvidersInput[] | RehabUncheckedCreateWithoutInsuranceProvidersInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutInsuranceProvidersInput | RehabCreateOrConnectWithoutInsuranceProvidersInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutInsuranceProvidersInput = {
    create?: XOR<RehabCreateWithoutInsuranceProvidersInput, RehabUncheckedCreateWithoutInsuranceProvidersInput> | RehabCreateWithoutInsuranceProvidersInput[] | RehabUncheckedCreateWithoutInsuranceProvidersInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutInsuranceProvidersInput | RehabCreateOrConnectWithoutInsuranceProvidersInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutInsuranceProvidersNestedInput = {
    create?: XOR<RehabCreateWithoutInsuranceProvidersInput, RehabUncheckedCreateWithoutInsuranceProvidersInput> | RehabCreateWithoutInsuranceProvidersInput[] | RehabUncheckedCreateWithoutInsuranceProvidersInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutInsuranceProvidersInput | RehabCreateOrConnectWithoutInsuranceProvidersInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutInsuranceProvidersInput | RehabUpsertWithWhereUniqueWithoutInsuranceProvidersInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutInsuranceProvidersInput | RehabUpdateWithWhereUniqueWithoutInsuranceProvidersInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutInsuranceProvidersInput | RehabUpdateManyWithWhereWithoutInsuranceProvidersInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutInsuranceProvidersNestedInput = {
    create?: XOR<RehabCreateWithoutInsuranceProvidersInput, RehabUncheckedCreateWithoutInsuranceProvidersInput> | RehabCreateWithoutInsuranceProvidersInput[] | RehabUncheckedCreateWithoutInsuranceProvidersInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutInsuranceProvidersInput | RehabCreateOrConnectWithoutInsuranceProvidersInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutInsuranceProvidersInput | RehabUpsertWithWhereUniqueWithoutInsuranceProvidersInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutInsuranceProvidersInput | RehabUpdateWithWhereUniqueWithoutInsuranceProvidersInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutInsuranceProvidersInput | RehabUpdateManyWithWhereWithoutInsuranceProvidersInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutClienteleInput = {
    create?: XOR<RehabCreateWithoutClienteleInput, RehabUncheckedCreateWithoutClienteleInput> | RehabCreateWithoutClienteleInput[] | RehabUncheckedCreateWithoutClienteleInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutClienteleInput | RehabCreateOrConnectWithoutClienteleInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutClienteleInput = {
    create?: XOR<RehabCreateWithoutClienteleInput, RehabUncheckedCreateWithoutClienteleInput> | RehabCreateWithoutClienteleInput[] | RehabUncheckedCreateWithoutClienteleInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutClienteleInput | RehabCreateOrConnectWithoutClienteleInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutClienteleNestedInput = {
    create?: XOR<RehabCreateWithoutClienteleInput, RehabUncheckedCreateWithoutClienteleInput> | RehabCreateWithoutClienteleInput[] | RehabUncheckedCreateWithoutClienteleInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutClienteleInput | RehabCreateOrConnectWithoutClienteleInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutClienteleInput | RehabUpsertWithWhereUniqueWithoutClienteleInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutClienteleInput | RehabUpdateWithWhereUniqueWithoutClienteleInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutClienteleInput | RehabUpdateManyWithWhereWithoutClienteleInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutClienteleNestedInput = {
    create?: XOR<RehabCreateWithoutClienteleInput, RehabUncheckedCreateWithoutClienteleInput> | RehabCreateWithoutClienteleInput[] | RehabUncheckedCreateWithoutClienteleInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutClienteleInput | RehabCreateOrConnectWithoutClienteleInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutClienteleInput | RehabUpsertWithWhereUniqueWithoutClienteleInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutClienteleInput | RehabUpdateWithWhereUniqueWithoutClienteleInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutClienteleInput | RehabUpdateManyWithWhereWithoutClienteleInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutSettingsInput = {
    create?: XOR<RehabCreateWithoutSettingsInput, RehabUncheckedCreateWithoutSettingsInput> | RehabCreateWithoutSettingsInput[] | RehabUncheckedCreateWithoutSettingsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutSettingsInput | RehabCreateOrConnectWithoutSettingsInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutSettingsInput = {
    create?: XOR<RehabCreateWithoutSettingsInput, RehabUncheckedCreateWithoutSettingsInput> | RehabCreateWithoutSettingsInput[] | RehabUncheckedCreateWithoutSettingsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutSettingsInput | RehabCreateOrConnectWithoutSettingsInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutSettingsNestedInput = {
    create?: XOR<RehabCreateWithoutSettingsInput, RehabUncheckedCreateWithoutSettingsInput> | RehabCreateWithoutSettingsInput[] | RehabUncheckedCreateWithoutSettingsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutSettingsInput | RehabCreateOrConnectWithoutSettingsInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutSettingsInput | RehabUpsertWithWhereUniqueWithoutSettingsInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutSettingsInput | RehabUpdateWithWhereUniqueWithoutSettingsInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutSettingsInput | RehabUpdateManyWithWhereWithoutSettingsInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutSettingsNestedInput = {
    create?: XOR<RehabCreateWithoutSettingsInput, RehabUncheckedCreateWithoutSettingsInput> | RehabCreateWithoutSettingsInput[] | RehabUncheckedCreateWithoutSettingsInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutSettingsInput | RehabCreateOrConnectWithoutSettingsInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutSettingsInput | RehabUpsertWithWhereUniqueWithoutSettingsInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutSettingsInput | RehabUpdateWithWhereUniqueWithoutSettingsInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutSettingsInput | RehabUpdateManyWithWhereWithoutSettingsInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutApproachesInput = {
    create?: XOR<RehabCreateWithoutApproachesInput, RehabUncheckedCreateWithoutApproachesInput> | RehabCreateWithoutApproachesInput[] | RehabUncheckedCreateWithoutApproachesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutApproachesInput | RehabCreateOrConnectWithoutApproachesInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutApproachesInput = {
    create?: XOR<RehabCreateWithoutApproachesInput, RehabUncheckedCreateWithoutApproachesInput> | RehabCreateWithoutApproachesInput[] | RehabUncheckedCreateWithoutApproachesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutApproachesInput | RehabCreateOrConnectWithoutApproachesInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutApproachesNestedInput = {
    create?: XOR<RehabCreateWithoutApproachesInput, RehabUncheckedCreateWithoutApproachesInput> | RehabCreateWithoutApproachesInput[] | RehabUncheckedCreateWithoutApproachesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutApproachesInput | RehabCreateOrConnectWithoutApproachesInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutApproachesInput | RehabUpsertWithWhereUniqueWithoutApproachesInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutApproachesInput | RehabUpdateWithWhereUniqueWithoutApproachesInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutApproachesInput | RehabUpdateManyWithWhereWithoutApproachesInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutApproachesNestedInput = {
    create?: XOR<RehabCreateWithoutApproachesInput, RehabUncheckedCreateWithoutApproachesInput> | RehabCreateWithoutApproachesInput[] | RehabUncheckedCreateWithoutApproachesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutApproachesInput | RehabCreateOrConnectWithoutApproachesInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutApproachesInput | RehabUpsertWithWhereUniqueWithoutApproachesInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutApproachesInput | RehabUpdateWithWhereUniqueWithoutApproachesInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutApproachesInput | RehabUpdateManyWithWhereWithoutApproachesInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutPriceRangesInput = {
    create?: XOR<RehabCreateWithoutPriceRangesInput, RehabUncheckedCreateWithoutPriceRangesInput> | RehabCreateWithoutPriceRangesInput[] | RehabUncheckedCreateWithoutPriceRangesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutPriceRangesInput | RehabCreateOrConnectWithoutPriceRangesInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutPriceRangesInput = {
    create?: XOR<RehabCreateWithoutPriceRangesInput, RehabUncheckedCreateWithoutPriceRangesInput> | RehabCreateWithoutPriceRangesInput[] | RehabUncheckedCreateWithoutPriceRangesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutPriceRangesInput | RehabCreateOrConnectWithoutPriceRangesInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutPriceRangesNestedInput = {
    create?: XOR<RehabCreateWithoutPriceRangesInput, RehabUncheckedCreateWithoutPriceRangesInput> | RehabCreateWithoutPriceRangesInput[] | RehabUncheckedCreateWithoutPriceRangesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutPriceRangesInput | RehabCreateOrConnectWithoutPriceRangesInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutPriceRangesInput | RehabUpsertWithWhereUniqueWithoutPriceRangesInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutPriceRangesInput | RehabUpdateWithWhereUniqueWithoutPriceRangesInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutPriceRangesInput | RehabUpdateManyWithWhereWithoutPriceRangesInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutPriceRangesNestedInput = {
    create?: XOR<RehabCreateWithoutPriceRangesInput, RehabUncheckedCreateWithoutPriceRangesInput> | RehabCreateWithoutPriceRangesInput[] | RehabUncheckedCreateWithoutPriceRangesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutPriceRangesInput | RehabCreateOrConnectWithoutPriceRangesInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutPriceRangesInput | RehabUpsertWithWhereUniqueWithoutPriceRangesInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutPriceRangesInput | RehabUpdateWithWhereUniqueWithoutPriceRangesInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutPriceRangesInput | RehabUpdateManyWithWhereWithoutPriceRangesInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutCountriesInput = {
    create?: XOR<RehabCreateWithoutCountriesInput, RehabUncheckedCreateWithoutCountriesInput> | RehabCreateWithoutCountriesInput[] | RehabUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutCountriesInput | RehabCreateOrConnectWithoutCountriesInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<RehabCreateWithoutCountriesInput, RehabUncheckedCreateWithoutCountriesInput> | RehabCreateWithoutCountriesInput[] | RehabUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutCountriesInput | RehabCreateOrConnectWithoutCountriesInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<RehabCreateWithoutCountriesInput, RehabUncheckedCreateWithoutCountriesInput> | RehabCreateWithoutCountriesInput[] | RehabUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutCountriesInput | RehabCreateOrConnectWithoutCountriesInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutCountriesInput | RehabUpsertWithWhereUniqueWithoutCountriesInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutCountriesInput | RehabUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutCountriesInput | RehabUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<RehabCreateWithoutCountriesInput, RehabUncheckedCreateWithoutCountriesInput> | RehabCreateWithoutCountriesInput[] | RehabUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutCountriesInput | RehabCreateOrConnectWithoutCountriesInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutCountriesInput | RehabUpsertWithWhereUniqueWithoutCountriesInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutCountriesInput | RehabUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutCountriesInput | RehabUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedManyWithoutStatesInput = {
    create?: XOR<RehabCreateWithoutStatesInput, RehabUncheckedCreateWithoutStatesInput> | RehabCreateWithoutStatesInput[] | RehabUncheckedCreateWithoutStatesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutStatesInput | RehabCreateOrConnectWithoutStatesInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUncheckedCreateNestedManyWithoutStatesInput = {
    create?: XOR<RehabCreateWithoutStatesInput, RehabUncheckedCreateWithoutStatesInput> | RehabCreateWithoutStatesInput[] | RehabUncheckedCreateWithoutStatesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutStatesInput | RehabCreateOrConnectWithoutStatesInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
  }

  export type RehabUpdateManyWithoutStatesNestedInput = {
    create?: XOR<RehabCreateWithoutStatesInput, RehabUncheckedCreateWithoutStatesInput> | RehabCreateWithoutStatesInput[] | RehabUncheckedCreateWithoutStatesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutStatesInput | RehabCreateOrConnectWithoutStatesInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutStatesInput | RehabUpsertWithWhereUniqueWithoutStatesInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutStatesInput | RehabUpdateWithWhereUniqueWithoutStatesInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutStatesInput | RehabUpdateManyWithWhereWithoutStatesInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabUncheckedUpdateManyWithoutStatesNestedInput = {
    create?: XOR<RehabCreateWithoutStatesInput, RehabUncheckedCreateWithoutStatesInput> | RehabCreateWithoutStatesInput[] | RehabUncheckedCreateWithoutStatesInput[]
    connectOrCreate?: RehabCreateOrConnectWithoutStatesInput | RehabCreateOrConnectWithoutStatesInput[]
    upsert?: RehabUpsertWithWhereUniqueWithoutStatesInput | RehabUpsertWithWhereUniqueWithoutStatesInput[]
    set?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    disconnect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    delete?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    connect?: RehabWhereUniqueInput | RehabWhereUniqueInput[]
    update?: RehabUpdateWithWhereUniqueWithoutStatesInput | RehabUpdateWithWhereUniqueWithoutStatesInput[]
    updateMany?: RehabUpdateManyWithWhereWithoutStatesInput | RehabUpdateManyWithWhereWithoutStatesInput[]
    deleteMany?: RehabScalarWhereInput | RehabScalarWhereInput[]
  }

  export type RehabCreateNestedOneWithoutReviewsInput = {
    create?: XOR<RehabCreateWithoutReviewsInput, RehabUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RehabCreateOrConnectWithoutReviewsInput
    connect?: RehabWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RehabUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<RehabCreateWithoutReviewsInput, RehabUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RehabCreateOrConnectWithoutReviewsInput
    upsert?: RehabUpsertWithoutReviewsInput
    connect?: RehabWhereUniqueInput
    update?: XOR<XOR<RehabUpdateToOneWithWhereWithoutReviewsInput, RehabUpdateWithoutReviewsInput>, RehabUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    upsert?: usersUpsertWithoutReviewsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewsInput, usersUpdateWithoutReviewsInput>, usersUncheckedUpdateWithoutReviewsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type RehabCreateWithoutUserInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutUserInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutUserInput, RehabUncheckedCreateWithoutUserInput>
  }

  export type RehabCreateManyUserInputEnvelope = {
    data: RehabCreateManyUserInput | RehabCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    content: string
    rating: number
    createdAt?: Date | string
    rehab: RehabCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    rating: number
    createdAt?: Date | string
    rehabId: number
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RehabUpsertWithWhereUniqueWithoutUserInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutUserInput, RehabUncheckedUpdateWithoutUserInput>
    create: XOR<RehabCreateWithoutUserInput, RehabUncheckedCreateWithoutUserInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutUserInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutUserInput, RehabUncheckedUpdateWithoutUserInput>
  }

  export type RehabUpdateManyWithWhereWithoutUserInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutUserInput>
  }

  export type RehabScalarWhereInput = {
    AND?: RehabScalarWhereInput | RehabScalarWhereInput[]
    OR?: RehabScalarWhereInput[]
    NOT?: RehabScalarWhereInput | RehabScalarWhereInput[]
    id?: IntFilter<"Rehab"> | number
    name?: StringFilter<"Rehab"> | string
    address?: StringNullableFilter<"Rehab"> | string | null
    description?: StringNullableFilter<"Rehab"> | string | null
    phone?: StringNullableFilter<"Rehab"> | string | null
    last_updated_nppes?: DateTimeNullableFilter<"Rehab"> | Date | string | null
    website?: StringNullableFilter<"Rehab"> | string | null
    userId?: IntNullableFilter<"Rehab"> | number | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    userId?: IntFilter<"Review"> | number
    rehabId?: IntFilter<"Review"> | number
  }

  export type usersCreateWithoutRehabsInput = {
    name: string
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutRehabsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRehabsInput, usersUncheckedCreateWithoutRehabsInput>
  }

  export type ReviewCreateWithoutRehabInput = {
    content: string
    rating: number
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutRehabInput = {
    id?: number
    content: string
    rating: number
    createdAt?: Date | string
    userId: number
  }

  export type ReviewCreateOrConnectWithoutRehabInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRehabInput, ReviewUncheckedCreateWithoutRehabInput>
  }

  export type ReviewCreateManyRehabInputEnvelope = {
    data: ReviewCreateManyRehabInput | ReviewCreateManyRehabInput[]
    skipDuplicates?: boolean
  }

  export type AmenityCreateWithoutRehabsInput = {
    name: string
  }

  export type AmenityUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
  }

  export type AmenityCreateOrConnectWithoutRehabsInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutRehabsInput, AmenityUncheckedCreateWithoutRehabsInput>
  }

  export type ApproachCreateWithoutRehabsInput = {
    name: string
  }

  export type ApproachUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
  }

  export type ApproachCreateOrConnectWithoutRehabsInput = {
    where: ApproachWhereUniqueInput
    create: XOR<ApproachCreateWithoutRehabsInput, ApproachUncheckedCreateWithoutRehabsInput>
  }

  export type ClienteleCreateWithoutRehabsInput = {
    name: string
  }

  export type ClienteleUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
  }

  export type ClienteleCreateOrConnectWithoutRehabsInput = {
    where: ClienteleWhereUniqueInput
    create: XOR<ClienteleCreateWithoutRehabsInput, ClienteleUncheckedCreateWithoutRehabsInput>
  }

  export type ConditionCreateWithoutRehabsInput = {
    name: string
  }

  export type ConditionUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
  }

  export type ConditionCreateOrConnectWithoutRehabsInput = {
    where: ConditionWhereUniqueInput
    create: XOR<ConditionCreateWithoutRehabsInput, ConditionUncheckedCreateWithoutRehabsInput>
  }

  export type CountryCreateWithoutRehabsInput = {
    name: string
  }

  export type CountryUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
  }

  export type CountryCreateOrConnectWithoutRehabsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutRehabsInput, CountryUncheckedCreateWithoutRehabsInput>
  }

  export type InsuranceProviderCreateWithoutRehabsInput = {
    name: string
  }

  export type InsuranceProviderUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
  }

  export type InsuranceProviderCreateOrConnectWithoutRehabsInput = {
    where: InsuranceProviderWhereUniqueInput
    create: XOR<InsuranceProviderCreateWithoutRehabsInput, InsuranceProviderUncheckedCreateWithoutRehabsInput>
  }

  export type LevelOfCareCreateWithoutRehabsInput = {
    name: string
  }

  export type LevelOfCareUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
  }

  export type LevelOfCareCreateOrConnectWithoutRehabsInput = {
    where: LevelOfCareWhereUniqueInput
    create: XOR<LevelOfCareCreateWithoutRehabsInput, LevelOfCareUncheckedCreateWithoutRehabsInput>
  }

  export type PriceRangeCreateWithoutRehabsInput = {
    label: string
  }

  export type PriceRangeUncheckedCreateWithoutRehabsInput = {
    id?: number
    label: string
  }

  export type PriceRangeCreateOrConnectWithoutRehabsInput = {
    where: PriceRangeWhereUniqueInput
    create: XOR<PriceRangeCreateWithoutRehabsInput, PriceRangeUncheckedCreateWithoutRehabsInput>
  }

  export type SettingCreateWithoutRehabsInput = {
    name: string
  }

  export type SettingUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
  }

  export type SettingCreateOrConnectWithoutRehabsInput = {
    where: SettingWhereUniqueInput
    create: XOR<SettingCreateWithoutRehabsInput, SettingUncheckedCreateWithoutRehabsInput>
  }

  export type StateCreateWithoutRehabsInput = {
    name: string
  }

  export type StateUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
  }

  export type StateCreateOrConnectWithoutRehabsInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutRehabsInput, StateUncheckedCreateWithoutRehabsInput>
  }

  export type TreatmentCreateWithoutRehabsInput = {
    name: string
  }

  export type TreatmentUncheckedCreateWithoutRehabsInput = {
    id?: number
    name: string
  }

  export type TreatmentCreateOrConnectWithoutRehabsInput = {
    where: TreatmentWhereUniqueInput
    create: XOR<TreatmentCreateWithoutRehabsInput, TreatmentUncheckedCreateWithoutRehabsInput>
  }

  export type usersUpsertWithoutRehabsInput = {
    update: XOR<usersUpdateWithoutRehabsInput, usersUncheckedUpdateWithoutRehabsInput>
    create: XOR<usersCreateWithoutRehabsInput, usersUncheckedCreateWithoutRehabsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRehabsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRehabsInput, usersUncheckedUpdateWithoutRehabsInput>
  }

  export type usersUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutRehabInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRehabInput, ReviewUncheckedUpdateWithoutRehabInput>
    create: XOR<ReviewCreateWithoutRehabInput, ReviewUncheckedCreateWithoutRehabInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRehabInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRehabInput, ReviewUncheckedUpdateWithoutRehabInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRehabInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRehabInput>
  }

  export type AmenityUpsertWithWhereUniqueWithoutRehabsInput = {
    where: AmenityWhereUniqueInput
    update: XOR<AmenityUpdateWithoutRehabsInput, AmenityUncheckedUpdateWithoutRehabsInput>
    create: XOR<AmenityCreateWithoutRehabsInput, AmenityUncheckedCreateWithoutRehabsInput>
  }

  export type AmenityUpdateWithWhereUniqueWithoutRehabsInput = {
    where: AmenityWhereUniqueInput
    data: XOR<AmenityUpdateWithoutRehabsInput, AmenityUncheckedUpdateWithoutRehabsInput>
  }

  export type AmenityUpdateManyWithWhereWithoutRehabsInput = {
    where: AmenityScalarWhereInput
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyWithoutRehabsInput>
  }

  export type AmenityScalarWhereInput = {
    AND?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
    OR?: AmenityScalarWhereInput[]
    NOT?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
    id?: IntFilter<"Amenity"> | number
    name?: StringFilter<"Amenity"> | string
  }

  export type ApproachUpsertWithWhereUniqueWithoutRehabsInput = {
    where: ApproachWhereUniqueInput
    update: XOR<ApproachUpdateWithoutRehabsInput, ApproachUncheckedUpdateWithoutRehabsInput>
    create: XOR<ApproachCreateWithoutRehabsInput, ApproachUncheckedCreateWithoutRehabsInput>
  }

  export type ApproachUpdateWithWhereUniqueWithoutRehabsInput = {
    where: ApproachWhereUniqueInput
    data: XOR<ApproachUpdateWithoutRehabsInput, ApproachUncheckedUpdateWithoutRehabsInput>
  }

  export type ApproachUpdateManyWithWhereWithoutRehabsInput = {
    where: ApproachScalarWhereInput
    data: XOR<ApproachUpdateManyMutationInput, ApproachUncheckedUpdateManyWithoutRehabsInput>
  }

  export type ApproachScalarWhereInput = {
    AND?: ApproachScalarWhereInput | ApproachScalarWhereInput[]
    OR?: ApproachScalarWhereInput[]
    NOT?: ApproachScalarWhereInput | ApproachScalarWhereInput[]
    id?: IntFilter<"Approach"> | number
    name?: StringFilter<"Approach"> | string
  }

  export type ClienteleUpsertWithWhereUniqueWithoutRehabsInput = {
    where: ClienteleWhereUniqueInput
    update: XOR<ClienteleUpdateWithoutRehabsInput, ClienteleUncheckedUpdateWithoutRehabsInput>
    create: XOR<ClienteleCreateWithoutRehabsInput, ClienteleUncheckedCreateWithoutRehabsInput>
  }

  export type ClienteleUpdateWithWhereUniqueWithoutRehabsInput = {
    where: ClienteleWhereUniqueInput
    data: XOR<ClienteleUpdateWithoutRehabsInput, ClienteleUncheckedUpdateWithoutRehabsInput>
  }

  export type ClienteleUpdateManyWithWhereWithoutRehabsInput = {
    where: ClienteleScalarWhereInput
    data: XOR<ClienteleUpdateManyMutationInput, ClienteleUncheckedUpdateManyWithoutRehabsInput>
  }

  export type ClienteleScalarWhereInput = {
    AND?: ClienteleScalarWhereInput | ClienteleScalarWhereInput[]
    OR?: ClienteleScalarWhereInput[]
    NOT?: ClienteleScalarWhereInput | ClienteleScalarWhereInput[]
    id?: IntFilter<"Clientele"> | number
    name?: StringFilter<"Clientele"> | string
  }

  export type ConditionUpsertWithWhereUniqueWithoutRehabsInput = {
    where: ConditionWhereUniqueInput
    update: XOR<ConditionUpdateWithoutRehabsInput, ConditionUncheckedUpdateWithoutRehabsInput>
    create: XOR<ConditionCreateWithoutRehabsInput, ConditionUncheckedCreateWithoutRehabsInput>
  }

  export type ConditionUpdateWithWhereUniqueWithoutRehabsInput = {
    where: ConditionWhereUniqueInput
    data: XOR<ConditionUpdateWithoutRehabsInput, ConditionUncheckedUpdateWithoutRehabsInput>
  }

  export type ConditionUpdateManyWithWhereWithoutRehabsInput = {
    where: ConditionScalarWhereInput
    data: XOR<ConditionUpdateManyMutationInput, ConditionUncheckedUpdateManyWithoutRehabsInput>
  }

  export type ConditionScalarWhereInput = {
    AND?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
    OR?: ConditionScalarWhereInput[]
    NOT?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
    id?: IntFilter<"Condition"> | number
    name?: StringFilter<"Condition"> | string
  }

  export type CountryUpsertWithWhereUniqueWithoutRehabsInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutRehabsInput, CountryUncheckedUpdateWithoutRehabsInput>
    create: XOR<CountryCreateWithoutRehabsInput, CountryUncheckedCreateWithoutRehabsInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutRehabsInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutRehabsInput, CountryUncheckedUpdateWithoutRehabsInput>
  }

  export type CountryUpdateManyWithWhereWithoutRehabsInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutRehabsInput>
  }

  export type CountryScalarWhereInput = {
    AND?: CountryScalarWhereInput | CountryScalarWhereInput[]
    OR?: CountryScalarWhereInput[]
    NOT?: CountryScalarWhereInput | CountryScalarWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
  }

  export type InsuranceProviderUpsertWithWhereUniqueWithoutRehabsInput = {
    where: InsuranceProviderWhereUniqueInput
    update: XOR<InsuranceProviderUpdateWithoutRehabsInput, InsuranceProviderUncheckedUpdateWithoutRehabsInput>
    create: XOR<InsuranceProviderCreateWithoutRehabsInput, InsuranceProviderUncheckedCreateWithoutRehabsInput>
  }

  export type InsuranceProviderUpdateWithWhereUniqueWithoutRehabsInput = {
    where: InsuranceProviderWhereUniqueInput
    data: XOR<InsuranceProviderUpdateWithoutRehabsInput, InsuranceProviderUncheckedUpdateWithoutRehabsInput>
  }

  export type InsuranceProviderUpdateManyWithWhereWithoutRehabsInput = {
    where: InsuranceProviderScalarWhereInput
    data: XOR<InsuranceProviderUpdateManyMutationInput, InsuranceProviderUncheckedUpdateManyWithoutRehabsInput>
  }

  export type InsuranceProviderScalarWhereInput = {
    AND?: InsuranceProviderScalarWhereInput | InsuranceProviderScalarWhereInput[]
    OR?: InsuranceProviderScalarWhereInput[]
    NOT?: InsuranceProviderScalarWhereInput | InsuranceProviderScalarWhereInput[]
    id?: IntFilter<"InsuranceProvider"> | number
    name?: StringFilter<"InsuranceProvider"> | string
  }

  export type LevelOfCareUpsertWithWhereUniqueWithoutRehabsInput = {
    where: LevelOfCareWhereUniqueInput
    update: XOR<LevelOfCareUpdateWithoutRehabsInput, LevelOfCareUncheckedUpdateWithoutRehabsInput>
    create: XOR<LevelOfCareCreateWithoutRehabsInput, LevelOfCareUncheckedCreateWithoutRehabsInput>
  }

  export type LevelOfCareUpdateWithWhereUniqueWithoutRehabsInput = {
    where: LevelOfCareWhereUniqueInput
    data: XOR<LevelOfCareUpdateWithoutRehabsInput, LevelOfCareUncheckedUpdateWithoutRehabsInput>
  }

  export type LevelOfCareUpdateManyWithWhereWithoutRehabsInput = {
    where: LevelOfCareScalarWhereInput
    data: XOR<LevelOfCareUpdateManyMutationInput, LevelOfCareUncheckedUpdateManyWithoutRehabsInput>
  }

  export type LevelOfCareScalarWhereInput = {
    AND?: LevelOfCareScalarWhereInput | LevelOfCareScalarWhereInput[]
    OR?: LevelOfCareScalarWhereInput[]
    NOT?: LevelOfCareScalarWhereInput | LevelOfCareScalarWhereInput[]
    id?: IntFilter<"LevelOfCare"> | number
    name?: StringFilter<"LevelOfCare"> | string
  }

  export type PriceRangeUpsertWithWhereUniqueWithoutRehabsInput = {
    where: PriceRangeWhereUniqueInput
    update: XOR<PriceRangeUpdateWithoutRehabsInput, PriceRangeUncheckedUpdateWithoutRehabsInput>
    create: XOR<PriceRangeCreateWithoutRehabsInput, PriceRangeUncheckedCreateWithoutRehabsInput>
  }

  export type PriceRangeUpdateWithWhereUniqueWithoutRehabsInput = {
    where: PriceRangeWhereUniqueInput
    data: XOR<PriceRangeUpdateWithoutRehabsInput, PriceRangeUncheckedUpdateWithoutRehabsInput>
  }

  export type PriceRangeUpdateManyWithWhereWithoutRehabsInput = {
    where: PriceRangeScalarWhereInput
    data: XOR<PriceRangeUpdateManyMutationInput, PriceRangeUncheckedUpdateManyWithoutRehabsInput>
  }

  export type PriceRangeScalarWhereInput = {
    AND?: PriceRangeScalarWhereInput | PriceRangeScalarWhereInput[]
    OR?: PriceRangeScalarWhereInput[]
    NOT?: PriceRangeScalarWhereInput | PriceRangeScalarWhereInput[]
    id?: IntFilter<"PriceRange"> | number
    label?: StringFilter<"PriceRange"> | string
  }

  export type SettingUpsertWithWhereUniqueWithoutRehabsInput = {
    where: SettingWhereUniqueInput
    update: XOR<SettingUpdateWithoutRehabsInput, SettingUncheckedUpdateWithoutRehabsInput>
    create: XOR<SettingCreateWithoutRehabsInput, SettingUncheckedCreateWithoutRehabsInput>
  }

  export type SettingUpdateWithWhereUniqueWithoutRehabsInput = {
    where: SettingWhereUniqueInput
    data: XOR<SettingUpdateWithoutRehabsInput, SettingUncheckedUpdateWithoutRehabsInput>
  }

  export type SettingUpdateManyWithWhereWithoutRehabsInput = {
    where: SettingScalarWhereInput
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyWithoutRehabsInput>
  }

  export type SettingScalarWhereInput = {
    AND?: SettingScalarWhereInput | SettingScalarWhereInput[]
    OR?: SettingScalarWhereInput[]
    NOT?: SettingScalarWhereInput | SettingScalarWhereInput[]
    id?: IntFilter<"Setting"> | number
    name?: StringFilter<"Setting"> | string
  }

  export type StateUpsertWithWhereUniqueWithoutRehabsInput = {
    where: StateWhereUniqueInput
    update: XOR<StateUpdateWithoutRehabsInput, StateUncheckedUpdateWithoutRehabsInput>
    create: XOR<StateCreateWithoutRehabsInput, StateUncheckedCreateWithoutRehabsInput>
  }

  export type StateUpdateWithWhereUniqueWithoutRehabsInput = {
    where: StateWhereUniqueInput
    data: XOR<StateUpdateWithoutRehabsInput, StateUncheckedUpdateWithoutRehabsInput>
  }

  export type StateUpdateManyWithWhereWithoutRehabsInput = {
    where: StateScalarWhereInput
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyWithoutRehabsInput>
  }

  export type StateScalarWhereInput = {
    AND?: StateScalarWhereInput | StateScalarWhereInput[]
    OR?: StateScalarWhereInput[]
    NOT?: StateScalarWhereInput | StateScalarWhereInput[]
    id?: IntFilter<"State"> | number
    name?: StringFilter<"State"> | string
  }

  export type TreatmentUpsertWithWhereUniqueWithoutRehabsInput = {
    where: TreatmentWhereUniqueInput
    update: XOR<TreatmentUpdateWithoutRehabsInput, TreatmentUncheckedUpdateWithoutRehabsInput>
    create: XOR<TreatmentCreateWithoutRehabsInput, TreatmentUncheckedCreateWithoutRehabsInput>
  }

  export type TreatmentUpdateWithWhereUniqueWithoutRehabsInput = {
    where: TreatmentWhereUniqueInput
    data: XOR<TreatmentUpdateWithoutRehabsInput, TreatmentUncheckedUpdateWithoutRehabsInput>
  }

  export type TreatmentUpdateManyWithWhereWithoutRehabsInput = {
    where: TreatmentScalarWhereInput
    data: XOR<TreatmentUpdateManyMutationInput, TreatmentUncheckedUpdateManyWithoutRehabsInput>
  }

  export type TreatmentScalarWhereInput = {
    AND?: TreatmentScalarWhereInput | TreatmentScalarWhereInput[]
    OR?: TreatmentScalarWhereInput[]
    NOT?: TreatmentScalarWhereInput | TreatmentScalarWhereInput[]
    id?: IntFilter<"Treatment"> | number
    name?: StringFilter<"Treatment"> | string
  }

  export type RehabCreateWithoutAmenitiesInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutAmenitiesInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutAmenitiesInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutAmenitiesInput, RehabUncheckedCreateWithoutAmenitiesInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutAmenitiesInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutAmenitiesInput, RehabUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<RehabCreateWithoutAmenitiesInput, RehabUncheckedCreateWithoutAmenitiesInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutAmenitiesInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutAmenitiesInput, RehabUncheckedUpdateWithoutAmenitiesInput>
  }

  export type RehabUpdateManyWithWhereWithoutAmenitiesInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutAmenitiesInput>
  }

  export type RehabCreateWithoutLevels_of_careInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutLevels_of_careInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutLevels_of_careInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutLevels_of_careInput, RehabUncheckedCreateWithoutLevels_of_careInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutLevels_of_careInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutLevels_of_careInput, RehabUncheckedUpdateWithoutLevels_of_careInput>
    create: XOR<RehabCreateWithoutLevels_of_careInput, RehabUncheckedCreateWithoutLevels_of_careInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutLevels_of_careInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutLevels_of_careInput, RehabUncheckedUpdateWithoutLevels_of_careInput>
  }

  export type RehabUpdateManyWithWhereWithoutLevels_of_careInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutLevels_of_careInput>
  }

  export type RehabCreateWithoutConditionsInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutConditionsInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutConditionsInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutConditionsInput, RehabUncheckedCreateWithoutConditionsInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutConditionsInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutConditionsInput, RehabUncheckedUpdateWithoutConditionsInput>
    create: XOR<RehabCreateWithoutConditionsInput, RehabUncheckedCreateWithoutConditionsInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutConditionsInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutConditionsInput, RehabUncheckedUpdateWithoutConditionsInput>
  }

  export type RehabUpdateManyWithWhereWithoutConditionsInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutConditionsInput>
  }

  export type RehabCreateWithoutTreatmentsInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutTreatmentsInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutTreatmentsInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutTreatmentsInput, RehabUncheckedCreateWithoutTreatmentsInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutTreatmentsInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutTreatmentsInput, RehabUncheckedUpdateWithoutTreatmentsInput>
    create: XOR<RehabCreateWithoutTreatmentsInput, RehabUncheckedCreateWithoutTreatmentsInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutTreatmentsInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutTreatmentsInput, RehabUncheckedUpdateWithoutTreatmentsInput>
  }

  export type RehabUpdateManyWithWhereWithoutTreatmentsInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutTreatmentsInput>
  }

  export type RehabCreateWithoutInsuranceProvidersInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutInsuranceProvidersInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutInsuranceProvidersInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutInsuranceProvidersInput, RehabUncheckedCreateWithoutInsuranceProvidersInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutInsuranceProvidersInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutInsuranceProvidersInput, RehabUncheckedUpdateWithoutInsuranceProvidersInput>
    create: XOR<RehabCreateWithoutInsuranceProvidersInput, RehabUncheckedCreateWithoutInsuranceProvidersInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutInsuranceProvidersInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutInsuranceProvidersInput, RehabUncheckedUpdateWithoutInsuranceProvidersInput>
  }

  export type RehabUpdateManyWithWhereWithoutInsuranceProvidersInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutInsuranceProvidersInput>
  }

  export type RehabCreateWithoutClienteleInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutClienteleInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutClienteleInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutClienteleInput, RehabUncheckedCreateWithoutClienteleInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutClienteleInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutClienteleInput, RehabUncheckedUpdateWithoutClienteleInput>
    create: XOR<RehabCreateWithoutClienteleInput, RehabUncheckedCreateWithoutClienteleInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutClienteleInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutClienteleInput, RehabUncheckedUpdateWithoutClienteleInput>
  }

  export type RehabUpdateManyWithWhereWithoutClienteleInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutClienteleInput>
  }

  export type RehabCreateWithoutSettingsInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutSettingsInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutSettingsInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutSettingsInput, RehabUncheckedCreateWithoutSettingsInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutSettingsInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutSettingsInput, RehabUncheckedUpdateWithoutSettingsInput>
    create: XOR<RehabCreateWithoutSettingsInput, RehabUncheckedCreateWithoutSettingsInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutSettingsInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutSettingsInput, RehabUncheckedUpdateWithoutSettingsInput>
  }

  export type RehabUpdateManyWithWhereWithoutSettingsInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutSettingsInput>
  }

  export type RehabCreateWithoutApproachesInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutApproachesInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutApproachesInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutApproachesInput, RehabUncheckedCreateWithoutApproachesInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutApproachesInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutApproachesInput, RehabUncheckedUpdateWithoutApproachesInput>
    create: XOR<RehabCreateWithoutApproachesInput, RehabUncheckedCreateWithoutApproachesInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutApproachesInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutApproachesInput, RehabUncheckedUpdateWithoutApproachesInput>
  }

  export type RehabUpdateManyWithWhereWithoutApproachesInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutApproachesInput>
  }

  export type RehabCreateWithoutPriceRangesInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutPriceRangesInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutPriceRangesInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutPriceRangesInput, RehabUncheckedCreateWithoutPriceRangesInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutPriceRangesInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutPriceRangesInput, RehabUncheckedUpdateWithoutPriceRangesInput>
    create: XOR<RehabCreateWithoutPriceRangesInput, RehabUncheckedCreateWithoutPriceRangesInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutPriceRangesInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutPriceRangesInput, RehabUncheckedUpdateWithoutPriceRangesInput>
  }

  export type RehabUpdateManyWithWhereWithoutPriceRangesInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutPriceRangesInput>
  }

  export type RehabCreateWithoutCountriesInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutCountriesInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutCountriesInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutCountriesInput, RehabUncheckedCreateWithoutCountriesInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutCountriesInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutCountriesInput, RehabUncheckedUpdateWithoutCountriesInput>
    create: XOR<RehabCreateWithoutCountriesInput, RehabUncheckedCreateWithoutCountriesInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutCountriesInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutCountriesInput, RehabUncheckedUpdateWithoutCountriesInput>
  }

  export type RehabUpdateManyWithWhereWithoutCountriesInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutCountriesInput>
  }

  export type RehabCreateWithoutStatesInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    reviews?: ReviewCreateNestedManyWithoutRehabInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutStatesInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRehabInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutStatesInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutStatesInput, RehabUncheckedCreateWithoutStatesInput>
  }

  export type RehabUpsertWithWhereUniqueWithoutStatesInput = {
    where: RehabWhereUniqueInput
    update: XOR<RehabUpdateWithoutStatesInput, RehabUncheckedUpdateWithoutStatesInput>
    create: XOR<RehabCreateWithoutStatesInput, RehabUncheckedCreateWithoutStatesInput>
  }

  export type RehabUpdateWithWhereUniqueWithoutStatesInput = {
    where: RehabWhereUniqueInput
    data: XOR<RehabUpdateWithoutStatesInput, RehabUncheckedUpdateWithoutStatesInput>
  }

  export type RehabUpdateManyWithWhereWithoutStatesInput = {
    where: RehabScalarWhereInput
    data: XOR<RehabUpdateManyMutationInput, RehabUncheckedUpdateManyWithoutStatesInput>
  }

  export type RehabCreateWithoutReviewsInput = {
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    user?: usersCreateNestedOneWithoutRehabsInput
    amenities?: AmenityCreateNestedManyWithoutRehabsInput
    approaches?: ApproachCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleCreateNestedManyWithoutRehabsInput
    conditions?: ConditionCreateNestedManyWithoutRehabsInput
    countries?: CountryCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeCreateNestedManyWithoutRehabsInput
    settings?: SettingCreateNestedManyWithoutRehabsInput
    states?: StateCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentCreateNestedManyWithoutRehabsInput
  }

  export type RehabUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
    userId?: number | null
    amenities?: AmenityUncheckedCreateNestedManyWithoutRehabsInput
    approaches?: ApproachUncheckedCreateNestedManyWithoutRehabsInput
    clientele?: ClienteleUncheckedCreateNestedManyWithoutRehabsInput
    conditions?: ConditionUncheckedCreateNestedManyWithoutRehabsInput
    countries?: CountryUncheckedCreateNestedManyWithoutRehabsInput
    insuranceProviders?: InsuranceProviderUncheckedCreateNestedManyWithoutRehabsInput
    levels_of_care?: LevelOfCareUncheckedCreateNestedManyWithoutRehabsInput
    priceRanges?: PriceRangeUncheckedCreateNestedManyWithoutRehabsInput
    settings?: SettingUncheckedCreateNestedManyWithoutRehabsInput
    states?: StateUncheckedCreateNestedManyWithoutRehabsInput
    treatments?: TreatmentUncheckedCreateNestedManyWithoutRehabsInput
  }

  export type RehabCreateOrConnectWithoutReviewsInput = {
    where: RehabWhereUniqueInput
    create: XOR<RehabCreateWithoutReviewsInput, RehabUncheckedCreateWithoutReviewsInput>
  }

  export type usersCreateWithoutReviewsInput = {
    name: string
    rehabs?: RehabCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    rehabs?: RehabUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutReviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
  }

  export type RehabUpsertWithoutReviewsInput = {
    update: XOR<RehabUpdateWithoutReviewsInput, RehabUncheckedUpdateWithoutReviewsInput>
    create: XOR<RehabCreateWithoutReviewsInput, RehabUncheckedCreateWithoutReviewsInput>
    where?: RehabWhereInput
  }

  export type RehabUpdateToOneWithWhereWithoutReviewsInput = {
    where?: RehabWhereInput
    data: XOR<RehabUpdateWithoutReviewsInput, RehabUncheckedUpdateWithoutReviewsInput>
  }

  export type RehabUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type usersUpsertWithoutReviewsInput = {
    update: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rehabs?: RehabUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RehabCreateManyUserInput = {
    id?: number
    name: string
    address?: string | null
    description?: string | null
    phone?: string | null
    last_updated_nppes?: Date | string | null
    website?: string | null
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    content: string
    rating: number
    createdAt?: Date | string
    rehabId: number
  }

  export type RehabUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rehab?: RehabUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rehabId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rehabId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyRehabInput = {
    id?: number
    content: string
    rating: number
    createdAt?: Date | string
    userId: number
  }

  export type ReviewUpdateWithoutRehabInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRehabInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutRehabInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AmenityUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApproachUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApproachUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApproachUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteleUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteleUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteleUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InsuranceProviderUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InsuranceProviderUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InsuranceProviderUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LevelOfCareUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LevelOfCareUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LevelOfCareUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PriceRangeUpdateWithoutRehabsInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type PriceRangeUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type PriceRangeUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TreatmentUpdateWithoutRehabsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TreatmentUncheckedUpdateWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TreatmentUncheckedUpdateManyWithoutRehabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RehabUpdateWithoutAmenitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutAmenitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutAmenitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RehabUpdateWithoutLevels_of_careInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutLevels_of_careInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutLevels_of_careInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RehabUpdateWithoutConditionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutConditionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutConditionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RehabUpdateWithoutTreatmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutTreatmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutTreatmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RehabUpdateWithoutInsuranceProvidersInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutInsuranceProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutInsuranceProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RehabUpdateWithoutClienteleInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutClienteleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutClienteleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RehabUpdateWithoutSettingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RehabUpdateWithoutApproachesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutApproachesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutApproachesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RehabUpdateWithoutPriceRangesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutPriceRangesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutPriceRangesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RehabUpdateWithoutCountriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    states?: StateUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutCountriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    states?: StateUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutCountriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RehabUpdateWithoutStatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutRehabsNestedInput
    reviews?: ReviewUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUpdateManyWithoutRehabsNestedInput
    countries?: CountryUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUpdateManyWithoutRehabsNestedInput
    settings?: SettingUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateWithoutStatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutRehabNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutRehabsNestedInput
    approaches?: ApproachUncheckedUpdateManyWithoutRehabsNestedInput
    clientele?: ClienteleUncheckedUpdateManyWithoutRehabsNestedInput
    conditions?: ConditionUncheckedUpdateManyWithoutRehabsNestedInput
    countries?: CountryUncheckedUpdateManyWithoutRehabsNestedInput
    insuranceProviders?: InsuranceProviderUncheckedUpdateManyWithoutRehabsNestedInput
    levels_of_care?: LevelOfCareUncheckedUpdateManyWithoutRehabsNestedInput
    priceRanges?: PriceRangeUncheckedUpdateManyWithoutRehabsNestedInput
    settings?: SettingUncheckedUpdateManyWithoutRehabsNestedInput
    treatments?: TreatmentUncheckedUpdateManyWithoutRehabsNestedInput
  }

  export type RehabUncheckedUpdateManyWithoutStatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_nppes?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RehabCountOutputTypeDefaultArgs instead
     */
    export type RehabCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RehabCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AmenityCountOutputTypeDefaultArgs instead
     */
    export type AmenityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AmenityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LevelOfCareCountOutputTypeDefaultArgs instead
     */
    export type LevelOfCareCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LevelOfCareCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConditionCountOutputTypeDefaultArgs instead
     */
    export type ConditionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConditionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TreatmentCountOutputTypeDefaultArgs instead
     */
    export type TreatmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TreatmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InsuranceProviderCountOutputTypeDefaultArgs instead
     */
    export type InsuranceProviderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InsuranceProviderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClienteleCountOutputTypeDefaultArgs instead
     */
    export type ClienteleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingCountOutputTypeDefaultArgs instead
     */
    export type SettingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApproachCountOutputTypeDefaultArgs instead
     */
    export type ApproachCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApproachCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceRangeCountOutputTypeDefaultArgs instead
     */
    export type PriceRangeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceRangeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryCountOutputTypeDefaultArgs instead
     */
    export type CountryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StateCountOutputTypeDefaultArgs instead
     */
    export type StateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RehabDefaultArgs instead
     */
    export type RehabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RehabDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AmenityDefaultArgs instead
     */
    export type AmenityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AmenityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LevelOfCareDefaultArgs instead
     */
    export type LevelOfCareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LevelOfCareDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConditionDefaultArgs instead
     */
    export type ConditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConditionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TreatmentDefaultArgs instead
     */
    export type TreatmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TreatmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InsuranceProviderDefaultArgs instead
     */
    export type InsuranceProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InsuranceProviderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClienteleDefaultArgs instead
     */
    export type ClienteleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingDefaultArgs instead
     */
    export type SettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApproachDefaultArgs instead
     */
    export type ApproachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApproachDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceRangeDefaultArgs instead
     */
    export type PriceRangeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceRangeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryDefaultArgs instead
     */
    export type CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StateDefaultArgs instead
     */
    export type StateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NPIRehabsDefaultArgs instead
     */
    export type NPIRehabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NPIRehabsDefaultArgs<ExtArgs>

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