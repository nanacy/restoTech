require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get menu" do
    get static_pages_menu_url
    assert_response :success
  end

  test "should get booking" do
    get static_pages_booking_url
    assert_response :success
  end

end
