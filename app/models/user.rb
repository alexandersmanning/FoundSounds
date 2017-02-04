class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true, format: { with: /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/ }
  validates :password, length: {minimum: 6}, allow_nil: :true, confirmation: true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :user_shows,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :UserShow

  has_many :shows,
    through: :user_shows,
    source: :user

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials (email, password)
    user = User.find_by(email: email)
    user && user.password_is?(password) ? user : nil
  end

  def password_is? password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  def find_user_shows()
    Show.select("shows.*, user_shows.attending, user_shows.id as user_shows_id")
      .joins(:users)
      .where(
      "users.id = #{self.id}")
      .order("shows.date")
  end

  private
  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end


end
