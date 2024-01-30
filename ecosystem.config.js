 {
  apps : [
        {
                name   : "binar_car_rental",
                script: "npm",
                args: "serve -s build -p 3000",
                env:{
                        NODE_ENV: "production"
        }
