import {
  CreatePost as CreatePostEvent,
  CreateUser as CreateUserEvent
} from "../generated/ThreeGram/ThreeGram"
import { Post, User } from "../generated/schema"

export function handleCreatePost(event: CreatePostEvent): void {
  let entity = new Post(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._author = event.params._author
  entity._title = event.params._title.toString()
  entity._media = event.params._media.toString()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateUser(event: CreateUserEvent): void {
  let entity = new User(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._wallet = event.params._wallet
  entity._username = event.params._username.toString()
  entity._name = event.params._name
  entity._bio = event.params._bio.toString()
  entity._avatar = event.params._avatar

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
