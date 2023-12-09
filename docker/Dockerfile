# Use the official MySQL image from Docker Hub
FROM mysql:latest

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=cineplex
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=password

# Copy the SQL file to the container
COPY Multikino.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 1234

# Set the entrypoint command
ENTRYPOINT ["docker-entrypoint.sh"]

# Command to run when the container starts
CMD ["mysqld"]
