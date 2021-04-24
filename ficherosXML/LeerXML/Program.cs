using System;
using System.Xml;

namespace LeerXML
{
    class Program
    {
        static void Main(string[] args)
        {
            XmlDocument doc = new XmlDocument();
            doc.Load("D:\\Roberto\\Documents\\1DAW\\PaginaWeb\\publico\\XML\\fichero.xml"); 
            foreach (XmlNode node in doc.DocumentElement.ChildNodes)
            {
                String id = node.Attributes["id"].Value;
                Console.WriteLine("id: " + id);
                if (node.HasChildNodes)
                {
                    for (int i = 0; i < node.ChildNodes.Count; i++)
                    {
                        Console.WriteLine(node.ChildNodes[i].Name + " : " + node.ChildNodes[i].InnerText);
                    }
                }
            }
            Console.ReadKey();
        }
    }
}
