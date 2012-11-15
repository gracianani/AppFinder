require 'test_helper'

class AppsControllerTest < ActionController::TestCase
  setup do
    @app = apps(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:apps)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create app" do
    assert_difference('App.count') do
      post :create, app: { developer: @app.developer, icon_url: @app.icon_url, like_count: @app.like_count, long_description: @app.long_description, ratings: @app.ratings, screenshot_url: @app.screenshot_url, short_discription: @app.short_discription, title: @app.title, video_url: @app.video_url }
    end

    assert_redirected_to app_path(assigns(:app))
  end

  test "should show app" do
    get :show, id: @app
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @app
    assert_response :success
  end

  test "should update app" do
    put :update, id: @app, app: { developer: @app.developer, icon_url: @app.icon_url, like_count: @app.like_count, long_description: @app.long_description, ratings: @app.ratings, screenshot_url: @app.screenshot_url, short_discription: @app.short_discription, title: @app.title, video_url: @app.video_url }
    assert_redirected_to app_path(assigns(:app))
  end

  test "should destroy app" do
    assert_difference('App.count', -1) do
      delete :destroy, id: @app
    end

    assert_redirected_to apps_path
  end
end
