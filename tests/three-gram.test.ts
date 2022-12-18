import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { CreatePost } from "../generated/schema"
import { CreatePost as CreatePostEvent } from "../generated/ThreeGram/ThreeGram"
import { handleCreatePost } from "../src/three-gram"
import { createCreatePostEvent } from "./three-gram-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _author = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _title = "Example string value"
    let _media = "Example string value"
    let newCreatePostEvent = createCreatePostEvent(_author, _title, _media)
    handleCreatePost(newCreatePostEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Post created and stored", () => {
    assert.entityCount("Post", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Post",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_author",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Post",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_title",
      "Example string value"
    )
    assert.fieldEquals(
      "Post",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_media",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
