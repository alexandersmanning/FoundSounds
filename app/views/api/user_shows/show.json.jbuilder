json.set! @user_show.show_id do
    json.userShowsId @user_show.id
    json.id @user_show.show_id
    json.attending @user_show.attending
  end