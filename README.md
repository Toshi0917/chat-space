# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index:true,null: false,unique:true
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :groups,through:groups_users
- has_many :messages
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :users,through:groups_users
- has_many :messages
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|reference|null: false,coreign_key,foreign_key:true|
|user_id|reference|null:false,foreign_key:true|
### Association
- belongs_to :user
- belongs_to :group