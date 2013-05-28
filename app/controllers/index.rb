get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/tweet/now' do
  p params[:tweet]
  p params
  Twitter.update(params[:tweet])
  
end
