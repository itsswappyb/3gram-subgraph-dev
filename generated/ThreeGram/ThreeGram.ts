// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreatePost extends ethereum.Event {
  get params(): CreatePost__Params {
    return new CreatePost__Params(this);
  }
}

export class CreatePost__Params {
  _event: CreatePost;

  constructor(event: CreatePost) {
    this._event = event;
  }

  get _author(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _title(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get _media(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class CreateUser extends ethereum.Event {
  get params(): CreateUser__Params {
    return new CreateUser__Params(this);
  }
}

export class CreateUser__Params {
  _event: CreateUser;

  constructor(event: CreateUser) {
    this._event = event;
  }

  get _wallet(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _username(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get _name(): string {
    return this._event.parameters[2].value.toString();
  }

  get _bio(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get _avatar(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class ThreeGram__getPostsResultValue0Struct extends ethereum.Tuple {
  get title(): string {
    return this[0].toString();
  }

  get author(): string {
    return this[1].toString();
  }

  get media(): string {
    return this[2].toString();
  }

  get likes(): BigInt {
    return this[3].toBigInt();
  }

  get timestamp(): BigInt {
    return this[4].toBigInt();
  }
}

export class ThreeGram__postsResult {
  value0: string;
  value1: string;
  value2: string;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: string,
    value1: string,
    value2: string,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getTitle(): string {
    return this.value0;
  }

  getAuthor(): string {
    return this.value1;
  }

  getMedia(): string {
    return this.value2;
  }

  getLikes(): BigInt {
    return this.value3;
  }

  getTimestamp(): BigInt {
    return this.value4;
  }
}

export class ThreeGram__usersResult {
  value0: Address;
  value1: string;
  value2: string;
  value3: string;
  value4: string;

  constructor(
    value0: Address,
    value1: string,
    value2: string,
    value3: string,
    value4: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    return map;
  }

  getWallet(): Address {
    return this.value0;
  }

  getName(): string {
    return this.value1;
  }

  getUsername(): string {
    return this.value2;
  }

  getBio(): string {
    return this.value3;
  }

  getAvatar(): string {
    return this.value4;
  }
}

export class ThreeGram extends ethereum.SmartContract {
  static bind(address: Address): ThreeGram {
    return new ThreeGram("ThreeGram", address);
  }

  getPosts(): Array<ThreeGram__getPostsResultValue0Struct> {
    let result = super.call(
      "getPosts",
      "getPosts():((string,string,string,uint256,uint256)[])",
      []
    );

    return result[0].toTupleArray<ThreeGram__getPostsResultValue0Struct>();
  }

  try_getPosts(): ethereum.CallResult<
    Array<ThreeGram__getPostsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getPosts",
      "getPosts():((string,string,string,uint256,uint256)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<ThreeGram__getPostsResultValue0Struct>()
    );
  }

  getUsername(_wallet: Address): string {
    let result = super.call("getUsername", "getUsername(address):(string)", [
      ethereum.Value.fromAddress(_wallet)
    ]);

    return result[0].toString();
  }

  try_getUsername(_wallet: Address): ethereum.CallResult<string> {
    let result = super.tryCall("getUsername", "getUsername(address):(string)", [
      ethereum.Value.fromAddress(_wallet)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  posts(param0: BigInt): ThreeGram__postsResult {
    let result = super.call(
      "posts",
      "posts(uint256):(string,string,string,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ThreeGram__postsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_posts(param0: BigInt): ethereum.CallResult<ThreeGram__postsResult> {
    let result = super.tryCall(
      "posts",
      "posts(uint256):(string,string,string,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ThreeGram__postsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  usernames(param0: Address): string {
    let result = super.call("usernames", "usernames(address):(string)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toString();
  }

  try_usernames(param0: Address): ethereum.CallResult<string> {
    let result = super.tryCall("usernames", "usernames(address):(string)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  users(param0: string): ThreeGram__usersResult {
    let result = super.call(
      "users",
      "users(string):(address,string,string,string,string)",
      [ethereum.Value.fromString(param0)]
    );

    return new ThreeGram__usersResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toString()
    );
  }

  try_users(param0: string): ethereum.CallResult<ThreeGram__usersResult> {
    let result = super.tryCall(
      "users",
      "users(string):(address,string,string,string,string)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ThreeGram__usersResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toString()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreatePostCall extends ethereum.Call {
  get inputs(): CreatePostCall__Inputs {
    return new CreatePostCall__Inputs(this);
  }

  get outputs(): CreatePostCall__Outputs {
    return new CreatePostCall__Outputs(this);
  }
}

export class CreatePostCall__Inputs {
  _call: CreatePostCall;

  constructor(call: CreatePostCall) {
    this._call = call;
  }

  get _title(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _media(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class CreatePostCall__Outputs {
  _call: CreatePostCall;

  constructor(call: CreatePostCall) {
    this._call = call;
  }
}

export class CreateUserCall extends ethereum.Call {
  get inputs(): CreateUserCall__Inputs {
    return new CreateUserCall__Inputs(this);
  }

  get outputs(): CreateUserCall__Outputs {
    return new CreateUserCall__Outputs(this);
  }
}

export class CreateUserCall__Inputs {
  _call: CreateUserCall;

  constructor(call: CreateUserCall) {
    this._call = call;
  }

  get _username(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _bio(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _avatar(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class CreateUserCall__Outputs {
  _call: CreateUserCall;

  constructor(call: CreateUserCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }

  get _pause(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}