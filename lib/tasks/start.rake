desc 'Run Rails server and React in development'
task start: :environment do
  # exec 'heroku local -f Procfile.dev'
  exec 'foreman start -f Procfile.dev'
end
