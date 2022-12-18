import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { CreatePost, CreateUser } from "../generated/ThreeGram/ThreeGram"

export function createCreatePostEvent(
  _author: Address,
  _title: string,
  _media: string
): CreatePost {
  // @ts-ignore
  let createPostEvent = changetype<CreatePost>(newMockEvent())

  createPostEvent.parameters = new Array()

  createPostEvent.parameters.push(
    new ethereum.EventParam("_author", ethereum.Value.fromAddress(_author))
  )
  createPostEvent.parameters.push(
    new ethereum.EventParam("_title", ethereum.Value.fromString(_title))
  )
  createPostEvent.parameters.push(
    new ethereum.EventParam("_media", ethereum.Value.fromString(_media))
  )

  return createPostEvent
}

export function createCreateUserEvent(
  _wallet: Address,
  _username: string,
  _name: string,
  _bio: string,
  _avatar: string
): CreateUser {
  // @ts-ignore
  let createUserEvent = changetype<CreateUser>(newMockEvent())

  createUserEvent.parameters = new Array()

  createUserEvent.parameters.push(
    new ethereum.EventParam("_wallet", ethereum.Value.fromAddress(_wallet))
  )
  createUserEvent.parameters.push(
    new ethereum.EventParam("_username", ethereum.Value.fromString(_username))
  )
  createUserEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )
  createUserEvent.parameters.push(
    new ethereum.EventParam("_bio", ethereum.Value.fromString(_bio))
  )
  createUserEvent.parameters.push(
    new ethereum.EventParam("_avatar", ethereum.Value.fromString(_avatar))
  )

  return createUserEvent
}

