# Traditional way to serve application

- Use `npm start` to starts/serves the application.
- Closing the terminal stops the running application.
- To keep the application running, the terminal where the app is running must not be closed.
- To run each application one terminal is needed.


# PM2

PM2 is a node js process manager , written in nodejs,using pm2 you can run your
production application.Using pm2 you can run/start and restart your application
easily.

PM2 is a production-grade Node.js process manager:

- Manages applications easily.
- Restarts them automatically if they crash.
- Deploys them to multiple servers with zero downtime.
- Provides a built-in load balancer.
- Automatically restarts applications if they crash.

# How to Spin Same Application Multiple Times Using PM2

## 1. Install PM2

If you haven't already installed PM2, you can do so via npm (Node Package Manager) by running: `npm i -g pm2 `

## 2. Start the Application

Start your application using PM2. Let's say your application's main file is `app.js`. You can start it with PM2 using:
`pm2 start app.js` here application name will be app

## 3. Scale the Application

To run multiple instances of the same application, you can scale the application using the `scale` command. For example, to run 3 instances of the same application, you can use: `pm2 scale app +3`

Replace `app` with the name of your application as registered with PM2.
`Eg: pm2 scale app +3`

## 4. View Running Instances

You can view the running instances of your application using: `pm2 list`

## 5. Monitor Instances

You can monitor the instances to see their health and resource usage by using: `pm2 monit`

## 6. Manage Instances

You can manage the instances individually using their PM2 process IDs (PIDs) or by name. For example:

- To stop a specific instance: `pm2 stop <app_name|id>`
 **Eg**: `pm2 stop 0` or `pm2 stop app`
- To restart a specific instance: `pm2 restart <app_name|id>`
 **Eg**: `pm2 restart 1` or `pm2 restart app`
- To delete a specific instance from PM2: `pm2 delete <app_name|id>`
 **Eg**: `pm2 delete 1` or `pm2 delete app`

By following these steps, you can spin the same application multiple times using PM2. Each instance will run independently and can be managed separately using PM2 commands.

## Restart vs Reload
- **Restart:** Stops all running instances and starts them again.
- **Reload:** Creates new instances/ports in the background and only terminates previous instances/ports once the new ones are started.

## Spin up multiple instances of your application with different ports-

`pm2 start app.js -i 3` here you don't need to start application before running this command

here `app.js` is server file name , change as per your application

# Other PM2 commands

`pm2 list` `pm2 logs` `pm2 status` `pm2 monit` `pm2 logs app_id`
